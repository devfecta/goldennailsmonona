

const toggler = document.getElementById('themeToggler');

// Check for saved user preference, otherwise default to light
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-bs-theme', currentTheme);

toggler.addEventListener('click', () => {
  // Check current active theme
  const activeTheme = document.documentElement.getAttribute('data-bs-theme');
  
  // Switch to the opposite theme
  const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
  
  // Apply and save the preference
  document.documentElement.setAttribute('data-bs-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

