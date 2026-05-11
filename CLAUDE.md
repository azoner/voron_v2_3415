# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A markdown-driven static documentation site for a **Voron V2.4 (300 mm) 3D printer, serial #3415**. It holds the build journal, Klipper configuration, plans, maintenance log, and operating notes. Built with [Hugo](https://gohugo.io/) Extended + the [Hextra](https://imfing.github.io/hextra/) theme (Hugo Module). Deployed on Cloudflare Pages.

This is *not* the printer's live Klipper config — it's a documentation site that includes a canonical copy of `printer.cfg` for reference.

## Commands

```sh
hugo mod get -u            # fetch / update Hextra
hugo server -D             # dev server at http://localhost:1313, hot reload
hugo --gc --minify         # production build into ./public
hugo mod tidy              # clean up go.mod after dependency changes
```

Hugo Extended ≥ 0.130 and Go ≥ 1.20 must be on PATH. The current shell may need to restart after a fresh `winget install` to pick up Hugo's PATH change.

## Architecture

### Content lives under `content/`

One folder per top-level section, each with an `_index.md` that the sidebar / nav consumes:

- `build/` — hardware (BOM, mods done)
- `config/` — Klipper configuration
- `usage/` — slicer profiles, materials, print-start flow
- `maintenance/` — recurring tasks and cadence
- `plans/` — future mods, ideas (move to `build/` when implemented)
- `notes/` — chronological journal

Menu order is set explicitly in `hugo.yaml` (`menu.main[].weight`), not by file weight, so reordering is a config-file edit.

### Klipper configs are the source of truth, not the markdown

Real `.cfg` files live under `content/config/files/`. The wrapping markdown page (e.g. `content/config/printer.md`) embeds the file via a custom shortcode:

```hugo
{{< include-code file="content/config/files/printer.cfg" lang="ini" >}}
```

The shortcode is defined in `layouts/shortcodes/include-code.html` and uses Hugo's `readFile` (paths resolve from the project root). This keeps a single source of truth — edit the `.cfg`, the docs update on rebuild.

When adding new Klipper files (e.g. `macros.cfg`, `mainsail.cfg`), drop them in `content/config/files/` and create a sibling `.md` page that includes them with the shortcode.

### Theming: one file, CSS custom properties

The full palette lives in `assets/css/custom.css`. `hugo.yaml` injects it via `params.customCSS`. Re-theming from a printer photo means editing ~5 CSS variables in that one file — no component code touches.

The default theme is dark (set in `hugo.yaml` → `params.theme.default: dark`). Toggle is exposed in the navbar.

### Theme as Hugo Module

Hextra is **not** vendored under `themes/`. It's a Go module declared in `hugo.yaml` → `module.imports` and `go.mod`. Updating: `hugo mod get -u github.com/imfing/hextra`. The `themes/` directory exists from `hugo new site` but is empty and can be ignored.

## Deploy model

Pushes to `main` on the GitHub remote trigger a Cloudflare Pages build. No GitHub Actions workflow exists in this repo — Cloudflare reads `hugo.yaml` and builds with the Hugo preset. Build command: `hugo --gc --minify`. Output: `public/`. Required env vars in Cloudflare: `HUGO_VERSION`, `GO_VERSION`.

PR branches get preview URLs automatically.

## Things that will bite you

- **`languageCode` is deprecated** in Hugo ≥ 0.158. Use `locale` (already correct in `hugo.yaml`).
- **`markup.goldmark.renderer.unsafe: true`** is required — Hextra's shortcodes emit raw HTML.
- The `include-code` shortcode resolves paths from the **project root**, not from the markdown file's directory. Always pass full `content/...` paths.
- When changing `hugo.yaml`'s `module.imports`, follow up with `hugo mod tidy` to sync `go.mod`.
- Many fields on the landing page and BOM are currently `TBD` — actual hardware specs (MCU, toolhead, probe, hotend) are unknown to this scaffold. Do not invent values.

## What's deliberately deferred

- **Color palette.** Placeholders only in `assets/css/custom.css`. User will provide a printer photo; derive 3-5 swatches from it and replace the `--primary-*` and `--hextra-*` values.
- **GitHub remote / Cloudflare project.** Not created — README documents the manual steps.
- **Actual Klipper config.** `content/config/files/printer.cfg` is a header comment only.
