// ================================
// REFERENCIAS A ELEMENTOS DEL DOM
// ================================

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

// ================================
// ABRIR / CERRAR MENÚ MOBILE
// ================================

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});

// ================================
// CERRAR MENÚ AL HACER CLICK FUERA
// ================================

overlay.addEventListener('click', () => {
  closeMenu();
});

// ================================
// CERRAR MENÚ AL HACER CLICK EN LINK
// ================================

const menuLinks = document.querySelectorAll('.mobile-menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

// ================================
// CERRAR MENÚ CON TECLA ESC
// ================================

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

// ================================
// FUNCIÓN CENTRALIZADA
// ================================

function closeMenu() {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
}
