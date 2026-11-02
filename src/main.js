import './style.css';

document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

function closeMenu() {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Apri il menu');
  mobileNav.hidden = true;
}

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const opening = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Chiudi il menu' : 'Apri il menu');
    mobileNav.hidden = !opening;
  });
  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !mobileNav.hidden) {
      closeMenu();
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 981px)').addEventListener('change', closeMenu);
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 30px 0px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const form = document.querySelector('#quote-form');
if (form) {
  const status = document.querySelector('#form-status');
  const fields = [...form.querySelectorAll('input, select, textarea')];
  const messages = {
    name: 'Inserisci il tuo nome (almeno 2 caratteri).',
    email: 'Inserisci un indirizzo email valido.',
    service: 'Seleziona il tipo di servizio.',
    message: 'Descrivi la tua richiesta (almeno 10 caratteri).',
  };

  function validate(field) {
    const error = document.getElementById(`${field.id}-error`);
    const invalid = !field.checkValidity() || (field.required && !field.value.trim());
    field.setAttribute('aria-invalid', String(invalid));
    if (error) error.textContent = invalid ? (messages[field.id] || 'Controlla questo campo.') : '';
    return !invalid;
  }

  fields.forEach((field) => {
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validate(field);
      if (status && !status.hidden) status.hidden = true;
    });
    field.addEventListener('change', () => {
      if (field.getAttribute('aria-invalid') === 'true') validate(field);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const invalidFields = fields.filter((field) => !validate(field));
    status.hidden = false;
    if (invalidFields.length) {
      status.classList.add('error');
      status.textContent = 'Controlla i campi evidenziati e riprova.';
      invalidFields[0].focus();
      return;
    }
    status.classList.remove('error');
    status.textContent = 'Il modulo è pronto, ma l’invio non è ancora attivo. I tuoi dati non sono stati trasmessi. Riprova quando saranno disponibili i recapiti ufficiali.';
    status.focus?.();
  });
}
