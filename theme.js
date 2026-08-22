// Сохранение и переключение темы
(function() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Обновить текст кнопки
  updateThemeButtonText();
}

function updateThemeButtonText() {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  
  const lang = localStorage.getItem('lang') || 'ru';
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  
  if (typeof translations !== 'undefined') {
    btn.textContent = isDark 
      ? translations[lang].toggleLight 
      : translations[lang].toggleDark;
  }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
  updateThemeButtonText();
});
