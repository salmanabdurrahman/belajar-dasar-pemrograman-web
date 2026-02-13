/**
 * Mobile Menu Toggle
 * Handles hamburger menu click and animates icon transformation
 */
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';

    // Toggle between menu and X icon
    const icon = mobileMenuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.remove('bx-menu');
      icon.classList.add('bx-x');
    } else {
      icon.classList.remove('bx-x');
      icon.classList.add('bx-menu');
    }
  });
}

/**
 * Auto-close Mobile Menu
 * Closes navigation menu when a link is clicked on mobile devices
 */
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
      document.body.style.overflow = '';

      // Reset to menu icon
      const icon = mobileMenuToggle.querySelector('i');
      icon.classList.remove('bx-x');
      icon.classList.add('bx-menu');
    }
  });
});

/**
 * Close Mobile Menu on Overlay Click
 * Closes navigation when clicking outside the menu
 */
if (navLinks) {
  navLinks.addEventListener('click', (e) => {
    if (e.target === navLinks && window.innerWidth <= 768) {
      navLinks.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
      document.body.style.overflow = '';

      // Reset to menu icon
      const icon = mobileMenuToggle.querySelector('i');
      icon.classList.remove('bx-x');
      icon.classList.add('bx-menu');
    }
  });
}
