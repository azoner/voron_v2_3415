// Mouse-tracked tilt for .serial-plate elements.
// Reads cursor position, maps to rotateX/rotateY via CSS custom properties.
// Respects prefers-reduced-motion. No deps.

(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const MAX_X = 14;  // max rotateX in degrees (away from viewer at top)
  const MAX_Y = 18;  // max rotateY in degrees (turn left/right)
  const REST_X = 6;  // resting X tilt (matches CSS default)

  function bind(plate) {
    const body = plate.querySelector(".plate-body");
    if (!body) return;
    let rafId = 0;

    plate.addEventListener("mousemove", (e) => {
      const rect = plate.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;   // 0..1
      const py = (e.clientY - rect.top) / rect.height;   // 0..1

      // Tilt away from cursor: cursor top → tilt forward more (smaller X);
      // cursor right → rotate Y positive.
      const tiltX = REST_X + (0.5 - py) * MAX_X;
      const tiltY = (px - 0.5) * MAX_Y;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        body.style.setProperty("--tilt-x", tiltX.toFixed(2) + "deg");
        body.style.setProperty("--tilt-y", tiltY.toFixed(2) + "deg");
        body.style.setProperty("--mx", px.toFixed(3));
        body.style.setProperty("--my", py.toFixed(3));
      });
    });

    plate.addEventListener("mouseleave", () => {
      if (rafId) cancelAnimationFrame(rafId);
      body.style.removeProperty("--tilt-x");
      body.style.removeProperty("--tilt-y");
      body.style.removeProperty("--mx");
      body.style.removeProperty("--my");
    });
  }

  function init() {
    document.querySelectorAll(".serial-plate").forEach(bind);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
