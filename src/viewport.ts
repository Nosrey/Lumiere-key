// Fix for mobile viewport unit quirks (iOS Safari and some mobile browsers)
// Sets CSS variables --vh and --vw that represent 1% of the current
// innerHeight/innerWidth respectively. Use calc(var(--vh) * N) instead of Nvh
// in CSS where you need a stable, JS-driven viewport measurement.

function setViewportUnits() {
  try {
    const vh = window.innerHeight * 0.01;
    const vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  } catch (e) {
    // non-fatal in non-browser environments
  }
}

// Run on load
setViewportUnits();

// Debounce helper
let _vpTimer: number | null = null;
function onResize() {
  if (_vpTimer) window.clearTimeout(_vpTimer);
  _vpTimer = window.setTimeout(() => {
    setViewportUnits();
    _vpTimer = null;
  }, 120) as unknown as number;
}

window.addEventListener('resize', onResize);
// orientationchange can fire before layout stabilizes; run a short delayed update
window.addEventListener('orientationchange', () => setTimeout(setViewportUnits, 250));

// Expose a small helper for testing if necessary
export const viewportUtils = {
  set: setViewportUnits,
};
