---
title: Integrations
weight: 5
---

Software that surrounds Klipper: Moonraker (API gateway), Fluidd (web UI), KlipperScreen (touchscreen LCD), and the webcam streamer.

> The published copy of `KlipperScreen.conf` has the Moonraker API key redacted. On the actual host the line must be restored with the real key. See [printer security](#).

## moonraker.conf

Moonraker is the HTTP/WebSocket API in front of Klipper. Fluidd and KlipperScreen both talk to it. Binds to `0.0.0.0` and trusts RFC1918 clients — only safe behind a firewall.

{{< include-code file="content/config/files/moonraker.conf" lang="ini" >}}

## fluidd.cfg

Web UI parameters Klipper consumes (display settings, pause/resume defaults).

{{< include-code file="content/config/files/fluidd.cfg" lang="ini" >}}

## KlipperScreen.conf

Touchscreen LCD config — preheat profiles, default print sort order. **API key redacted** in the published copy.

{{< include-code file="content/config/files/KlipperScreen.conf" lang="ini" >}}

## webcam.txt

mjpg-streamer parameters for the chamber webcam. Referenced by the Pi systemd service that starts the stream.

{{< include-code file="content/config/files/webcam.txt" lang="bash" >}}
