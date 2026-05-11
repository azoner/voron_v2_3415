---
title: Tuning
weight: 2
---

Input shaper, accel chooser, prime-line macro, and nozzle scrub — the configs that fall out of post-build tuning sessions and get iterated on over time.

## InputShaper.cfg

Output of `SHAPER_CALIBRATE` for X and Y. Frequencies referenced from `printer.cfg`'s `[input_shaper]` block.

{{< include-code file="content/config/files/InputShaper.cfg" lang="ini" >}}

## Accel.cfg

Accel test harness — `TEST_SPEED` runs and accel chooser macros.

{{< include-code file="content/config/files/Accel.cfg" lang="ini" >}}

## PrimeLineMacro.cfg

`PRINT_START` prime line — purges the previous filament and lays a primed bead at the build-plate edge before the first layer.

{{< include-code file="content/config/files/PrimeLineMacro.cfg" lang="ini" >}}

## nozzle_scrub.cfg

`CLEAN_NOZZLE` macro — wipes the hot nozzle on the brass brush before each print and after each filament change.

{{< include-code file="content/config/files/nozzle_scrub.cfg" lang="ini" >}}
