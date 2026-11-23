(() => {
  const root = document.documentElement;
  const storageKey = 'acesso-para-todos-preferencias';
  const min = 100;
  const max = 150;
  const step = 10;
  let settings = {fontSize: 100, highContrast: false};
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    if (Number.isFinite(saved.fontSize)) settings.fontSize = Math.min(max, Math.max(min, saved.fontSize));
    if (typeof saved.highContrast === 'boolean') settings.highContrast = saved.highContrast;
  } catch (_) { /* Armazenamento indisponível: usar padrão */ }
  const contrastButton = document.getElementById('contrast-toggle');
  function apply() {
    root.style.fontSize = settings.fontSize + '%';
    root.classList.toggle('high-contrast', settings.highContrast);
    contrastButton.setAttribute('aria-pressed', String(settings.highContrast));
    try { localStorage.setItem(storageKey, JSON.stringify(settings)); } catch (_) {}
  }
  document.getElementById('font-increase').addEventListener('click', () => {
    settings.fontSize = Math.min(max, settings.fontSize + step); apply();
  });
  document.getElementById('font-decrease').addEventListener('click', () => {
    settings.fontSize = Math.max(min, settings.fontSize - step); apply();
  });
  contrastButton.addEventListener('click', () => {
    settings.highContrast = !settings.highContrast; apply();
  });
  document.getElementById('reset-preferences').addEventListener('click', () => {
    settings = {fontSize: 100, highContrast: false}; apply();
  });
  apply();
})();
