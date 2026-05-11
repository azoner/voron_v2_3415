---
title: Klicky probe
weight: 3
---

[Klicky](https://github.com/jlas1/Klicky-Probe) magnetic probe — dock-attach macros, probe-attach/detach choreography, and the wrapping macros for QGL and bed mesh. Probe is attached only during measurement and parked on the dock the rest of the time.

The 7 files are split by responsibility:

- **klicky-variables.cfg** — tunable dock/park positions and pickup/dropoff offsets
- **klicky-probe.cfg** — base `[probe]` definition, pin assignments, sample count
- **klicky-macros.cfg** — `Attach_Probe` / `Dock_Probe` choreography
- **klicky-specific.cfg** — V2.4-specific Klicky overrides (dock location, retract direction)
- **klicky-quad-gantry-level.cfg** — `QUAD_GANTRY_LEVEL` macro wrapping attach + level + detach
- **klicky-bed-mesh-calibrate.cfg** — `BED_MESH_CALIBRATE` wrapping attach + mesh + detach
- (`PROBE` / `Z_CALIBRATION` macros come from `printer.cfg`)

## klicky-variables.cfg

{{< include-code file="content/config/files/klicky-variables.cfg" lang="ini" >}}

## klicky-probe.cfg

{{< include-code file="content/config/files/klicky-probe.cfg" lang="ini" >}}

## klicky-macros.cfg

{{< include-code file="content/config/files/klicky-macros.cfg" lang="ini" >}}

## klicky-specific.cfg

{{< include-code file="content/config/files/klicky-specific.cfg" lang="ini" >}}

## klicky-quad-gantry-level.cfg

{{< include-code file="content/config/files/klicky-quad-gantry-level.cfg" lang="ini" >}}

## klicky-bed-mesh-calibrate.cfg

{{< include-code file="content/config/files/klicky-bed-mesh-calibrate.cfg" lang="ini" >}}
