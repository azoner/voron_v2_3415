---
title: Config
weight: 2
---

Klipper configuration for Voron V2 #3415. Canonical `.cfg` / `.conf` / `.ini` files live in [`content/config/files/`](https://github.com/azoner/voron_v2_3415/tree/main/content/config/files) and are embedded into the pages below via the `include-code` shortcode — edit the file, the docs update on rebuild.

## Pages

- [**printer.cfg**](printer/) — top-level Klipper config (MCU, kinematics, steppers, extruder, bed, sensors)
- [**Tuning**](tuning/) — input shaper, accel, prime line, nozzle scrub
- [**Klicky probe**](klicky/) — magnetic dock-attach probe macros, QGL, bed mesh
- [**Toolhead**](toolhead/) — Stealthburner LEDs, KlipperExpander secondary MCU
- [**Integrations**](integrations/) — Moonraker, Fluidd, KlipperScreen, webcam
- [**Slicer profiles**](slicer/) — Ellis 45°, Voron PIF V2.4

## Apply changes on the printer

| Change | Reload command |
|---|---|
| Macro / `[gcode_macro]` body | `RESTART` |
| `[printer]`, kinematics, limits | `RESTART` |
| Pins, MCU, stepper enable | `FIRMWARE_RESTART` |
| Saved variables / PID / Z-offset | `SAVE_CONFIG` (auto-restarts) |

Never hand-edit anything below the `#*# <---- SAVE_CONFIG ---->` marker — Klipper owns that block.

## Note on the Moonraker API key

The on-disk copy of `KlipperScreen.conf` on the printer host carries a 32-char Moonraker API key. The published copy in this repo has that line **redacted** to keep the token out of public history — see [Integrations](integrations/).

Historical pre-sensorless-homing snapshots of `printer.cfg` live in [`archive/klipper/`](https://github.com/azoner/voron_v2_3415/tree/main/archive/klipper) at the repo root, outside the Hugo build.
