// Theme toggle with localStorage persistence
(function() {
  // Get saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  // Apply theme immediately to prevent flash
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggle);
  } else {
    initToggle();
  }
  
  function initToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    
    // Set initial state
    toggle.checked = savedTheme === 'light';
    
    // Handle toggle
    toggle.addEventListener('change', function() {
      const newTheme = this.checked ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
})();
