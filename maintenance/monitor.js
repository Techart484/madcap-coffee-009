// AWDE maintenance monitor — mon_380a6c9d
// Site: Madcap Coffee (https://www.madcapcoffee.com/)
// Cadence: every 6h · weekly digest · monthly stack audit
(function () {
  const checks = [
  "perf",
  "deps",
  "uptime",
  "seo",
  "a11y",
  "menu"
];
  const run = async () => {
    for (const id of checks) {
      try { await fetch('/__awde/check/' + id, { method: 'POST' }); }
      catch (_) { /* swallow */ }
    }
  };
  if (typeof window !== 'undefined') {
    setInterval(run, 6 * 60 * 60 * 1000);
    run();
  }
})();
