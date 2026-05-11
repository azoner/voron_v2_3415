# Voron V2 #3415 — documentation site

Markdown-driven static site for a Voron V2.4 (300 mm) 3D printer, serial #3415. Holds the build journal, Klipper configuration, plans, maintenance log, and usage docs. Built with [Hugo](https://gohugo.io/) + the [Hextra](https://imfing.github.io/hextra/) theme, deployed on Cloudflare Pages.

## Prerequisites

| Tool | Version | Install on Windows |
|---|---|---|
| Hugo Extended | ≥ 0.130 | `winget install Hugo.Hugo.Extended` |
| Go | ≥ 1.20 | `winget install GoLang.Go` |
| Git | any | `winget install Git.Git` |

Go is required because the Hextra theme is consumed as a Hugo Module.

## Local development

```sh
hugo mod get -u    # first time, or to update Hextra
hugo server -D     # serves at http://localhost:1313, hot reload
```

## Build

```sh
hugo --gc --minify
# output in ./public
```

## Deploy to Cloudflare Pages

No GitHub Action is needed — Cloudflare builds on push.

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → pick this repo.
3. Build settings:
   - Framework preset: **Hugo** (auto-detected)
   - Build command: `hugo --gc --minify`
   - Output directory: `public`
4. Environment variables (Settings → Variables):
   - `HUGO_VERSION` = `0.161.1` (or whatever `hugo version` prints locally)
   - `GO_VERSION` = `1.22` (or current)
5. Pushes to `main` redeploy. Branch pushes get preview URLs automatically.

## Where things live

| Path | Purpose |
|---|---|
| `hugo.yaml` | Site config, menu, theme module, custom-CSS hook |
| `assets/css/custom.css` | **The one file the color palette lives in** |
| `content/` | Markdown source — one folder per top-level section |
| `content/config/files/printer.cfg` | Canonical Klipper config; embedded into the wrapping page via `{{< include-code >}}` |
| `layouts/shortcodes/include-code.html` | Custom shortcode that renders a project-relative file as a fenced code block |
| `CLAUDE.md` | Orientation for future Claude Code sessions |

## Re-theming from a printer photo

1. Sample 3–5 swatches from the photo: extrusion color, dominant printed-part color, optional LED accent.
2. Convert the dominant printed-part color to HSL.
3. Edit `assets/css/custom.css` — update `--primary-hue / -saturation / -lightness`, plus `--hextra-bg / -fg` and `--voron-accent-2` as desired.
4. Reload — Hugo hot-recompiles CSS.
