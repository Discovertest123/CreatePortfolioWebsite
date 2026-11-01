document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('.app-shell');
  const themeToggles = document.querySelectorAll('.theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme');
  let darkMode = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;

  const applyTheme = () => {
    app?.classList.toggle('dark-theme', darkMode);
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
    themeToggles.forEach((toggle) => {
      toggle.classList.toggle('is-dark', darkMode);
      toggle.setAttribute('aria-pressed', String(darkMode));
      const label = darkMode ? 'Switch to light theme' : 'Switch to dark theme';
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
    });
  };

  themeToggles.forEach((toggle) => toggle.addEventListener('click', () => {
    darkMode = !darkMode;
    applyTheme();
  }));
  applyTheme();

  const menuButton = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu-panel');
  if (menuButton && mobileMenu) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Toggle navigation menu');
    menuButton.addEventListener('click', () => {
      const open = mobileMenu.style.display !== 'none';
      mobileMenu.style.display = open ? 'none' : 'block';
      menuButton.setAttribute('aria-expanded', String(!open));
    });
    mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const filterButtons = Array.from(document.querySelectorAll('#work button'));
  const filterContainer = filterButtons[0]?.parentElement;
  const projectGrid = filterContainer?.nextElementSibling;
  const projectCards = projectGrid ? Array.from(projectGrid.children) : [];
  const projectCategories = [
    ['wordpress', 'uiux'],
    ['wordpress', 'woocommerce'],
    ['uiux', 'wordpress'],
    ['uiux', 'wordpress'],
    ['landing', 'wordpress'],
    ['wordpress', 'uiux'],
  ];
  const filterValues = ['all', 'wordpress', 'uiux', 'landing', 'woocommerce'];

  projectCards.forEach((card, index) => {
    card.dataset.categories = (projectCategories[index] || []).join(' ');
  });
  filterButtons.forEach((button, index) => button.addEventListener('click', () => {
    const filter = filterValues[index] || 'all';
    filterButtons.forEach((item) => {
      const active = item === button;
      item.style.backgroundColor = active ? '#5DD62C' : '#fff';
      item.style.color = active ? '#fff' : '#6B7280';
      item.style.borderColor = active ? '#5DD62C' : '#E5E7EB';
    });
    projectCards.forEach((card) => {
      card.style.display = filter === 'all' || card.dataset.categories.split(' ').includes(filter) ? '' : 'none';
    });
  }));

  const processSection = document.querySelector('.process-section');
  if (processSection) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        processSection.classList.add('is-visible');
        observer.disconnect();
      }
    }, { threshold: 0.16 });
    observer.observe(processSection);
  }
});
