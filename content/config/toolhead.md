---
title: Toolhead
weight: 4
---

Stealthburner LED choreography and the secondary MCU on the toolhead.

## stealthburner_leds.cfg

Neopixel ring + nozzle LEDs on the Stealthburner toolhead. State machine drives per-condition colors (idle, heating, printing, error, complete).

{{< include-code file="content/config/files/stealthburner_leds.cfg" lang="ini" >}}

## KlipperExpander.cfg

Second MCU (STM32F042-based KlipperExpander) for additional toolhead pins — fans, accelerometer, or accessory loads that the Spider can't drive directly. Connects over USB; serial ID is pinned in this file.

{{< include-code file="content/config/files/KlipperExpander.cfg" lang="ini" >}}
