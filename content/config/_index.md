---
title: Config
weight: 2
---

Klipper configuration for Voron V2 #3415.

The canonical files live alongside the markdown pages under [`content/config/files/`](https://github.com/) and are embedded into the wrapping pages so a single source of truth drives both the deployed printer and the documentation.

## Pages

- [printer.cfg](printer/) — main entry point

## Apply changes on the printer

| Change | Reload command |
|---|---|
| Macro / `[gcode_macro]` body | `RESTART` |
| `[printer]`, kinematics, limits | `RESTART` |
| Pins, MCU, stepper enable | `FIRMWARE_RESTART` |
| Saved variables / PID / Z-offset | `SAVE_CONFIG` (auto-restarts) |

Never hand-edit anything below the `#*# <---- SAVE_CONFIG ---->` marker — Klipper owns that block.
