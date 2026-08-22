// Инициализация темы из localStorage
(function() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  updateThemeButtonText();
}

function updateThemeButtonText() {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  
  const lang = localStorage.getItem('lang') || 'ru';
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  
  if (typeof translations !== 'undefined') {
    const icon = isDark ? '☀️' : '🌙';
    const text = isDark 
      ? translations[lang].toggleLight 
      : translations[lang].toggleDark;
    btn.innerHTML = `<span>${icon}</span><span>${text}</span>`;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  updateThemeButtonText();
});