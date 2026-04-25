// Component loader for nav and footer
async function loadComponents() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  // Get the base path relative to current page
  const basePath = document.querySelector('script[src*="loader.js"]')?.src.replace(/\/[^/]*$/, '/') || './components/';

  try {
    // Load navigation
    if (navPlaceholder) {
      const navResponse = await fetch(basePath + 'nav.html');
      if (navResponse.ok) {
        navPlaceholder.innerHTML = await navResponse.text();
      } else {
        console.error('Failed to load navigation');
      }
    }

    // Load footer
    if (footerPlaceholder) {
      const footerResponse = await fetch(basePath + 'footer.html');
      if (footerResponse.ok) {
        footerPlaceholder.innerHTML = await footerResponse.text();
      } else {
        console.error('Failed to load footer');
      }
    }
  } catch (error) {
    console.error('Error loading components:', error);
  }
}

// Load components when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadComponents);
} else {
  loadComponents();
}
