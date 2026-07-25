/* =========================================================================
   CRAFTECH IMPEX — SITE SCRIPT
========================================================================= */

/* -------------------------------------------------------------------------
   PRODUCT DATA
   -------------------------------------------------------------------------
   This is the ONLY place you need to touch to manage the product gallery.

   TO ADD A PRODUCT:
     1. Drop the image file into  images/products/
     2. Add a new line below:
        { img: "images/products/your-file.jpg", name: "Product Name", tag: "Category" },

   TO REMOVE A PRODUCT:
     - Delete its line below (and optionally the image file).

   TO RENAME / ADD PRICE:
     - Edit the "name" field, e.g. name: "Brass Hammered Chandelier — $240"

   The grid, hover captions and lightbox all rebuild automatically from
   this array — no other code needs to change.
------------------------------------------------------------------------- */
const PRODUCTS = [
  { img: "images/products/chandelier-01.jpg", name: "Chandelier 01", tag: "Chandelier" },
  { img: "images/products/chandelier-02.jpg", name: "Chandelier 02", tag: "Chandelier" },
  { img: "images/products/chandelier-03.jpg", name: "Chandelier 03", tag: "Chandelier" },
  { img: "images/products/chandelier-04.jpg", name: "Chandelier 04", tag: "Chandelier" },
  { img: "images/products/chandelier-05.jpg", name: "Chandelier 05", tag: "Chandelier" },
  { img: "images/products/chandelier-06.jpg", name: "Chandelier 06", tag: "Chandelier" },
  { img: "images/products/chandelier-07.jpg", name: "Chandelier 07", tag: "Chandelier" },
  { img: "images/products/chandelier-08.jpg", name: "Chandelier 08", tag: "Chandelier" },
  { img: "images/products/chandelier-09.jpg", name: "Chandelier 09", tag: "Chandelier" },
  { img: "images/products/coffee-table-01.jpg", name: "Coffee Table 01", tag: "Coffee Table" },
  { img: "images/products/coffee-table-02.jpg", name: "Coffee Table 02", tag: "Coffee Table" },
  { img: "images/products/coffee-table-03.jpg", name: "Coffee Table 03", tag: "Coffee Table" },
  { img: "images/products/coffee-table-04.jpg", name: "Coffee Table 04", tag: "Coffee Table" },
  { img: "images/products/coffee-table-05.jpg", name: "Coffee Table 05", tag: "Coffee Table" },
  { img: "images/products/coffee-table-06.jpg", name: "Coffee Table 06", tag: "Coffee Table" },
  { img: "images/products/copper-item-01.jpg", name: "Copperware 01", tag: "Copperware" },
  { img: "images/products/copper-item-02.jpg", name: "Copperware 02", tag: "Copperware" },
  { img: "images/products/copper-item-03.jpg", name: "Copperware 03", tag: "Copperware" },
  { img: "images/products/copper-item-04.jpg", name: "Copperware 04", tag: "Copperware" },
  { img: "images/products/copper-item-05.jpg", name: "Copperware 05", tag: "Copperware" },
  { img: "images/products/copper-item-06.jpg", name: "Copperware 06", tag: "Copperware" },
  { img: "images/products/copper-item-07.jpg", name: "Copperware 07", tag: "Copperware" },
  { img: "images/products/copper-item-08.jpg", name: "Copperware 08", tag: "Copperware" },
  { img: "images/products/copper-item-09.jpg", name: "Copperware 09", tag: "Copperware" },
  { img: "images/products/copper-item-10.jpg", name: "Copperware 10", tag: "Copperware" },
  { img: "images/products/copper-item-11.jpg", name: "Copperware 11", tag: "Copperware" },
  { img: "images/products/copper-item-12.jpg", name: "Copperware 12", tag: "Copperware" },
  { img: "images/products/copper-item-13.jpg", name: "Copperware 13", tag: "Copperware" },
  { img: "images/products/copper-item-14.jpg", name: "Copperware 14", tag: "Copperware" },
  { img: "images/products/copper-item-15.jpg", name: "Copperware 15", tag: "Copperware" },
  { img: "images/products/flower-vase-01.jpg", name: "Flower Vase 01", tag: "Flower Vase" },
  { img: "images/products/flower-vase-02.jpg", name: "Flower Vase 02", tag: "Flower Vase" },
  { img: "images/products/flower-vase-03.jpg", name: "Flower Vase 03", tag: "Flower Vase" },
  { img: "images/products/flower-vase-04.jpg", name: "Flower Vase 04", tag: "Flower Vase" },
  { img: "images/products/flower-vase-05.jpg", name: "Flower Vase 05", tag: "Flower Vase" },
  { img: "images/products/flower-vase-06.jpg", name: "Flower Vase 06", tag: "Flower Vase" },
  { img: "images/products/flower-vase-07.jpg", name: "Flower Vase 07", tag: "Flower Vase" },
  { img: "images/products/flower-vase-08.jpg", name: "Flower Vase 08", tag: "Flower Vase" },
  { img: "images/products/flower-vase-09.jpg", name: "Flower Vase 09", tag: "Flower Vase" },
  { img: "images/products/side-table-01.jpg", name: "Side Table 01", tag: "Side Table" },
  { img: "images/products/side-table-02.jpg", name: "Side Table 02", tag: "Side Table" },
  { img: "images/products/side-table-03.jpg", name: "Side Table 03", tag: "Side Table" },
  { img: "images/products/side-table-04.jpg", name: "Side Table 04", tag: "Side Table" },
  { img: "images/products/side-table-05.jpg", name: "Side Table 05", tag: "Side Table" },
  { img: "images/products/side-table-06.jpg", name: "Side Table 06", tag: "Side Table" },
  { img: "images/products/side-table-07.jpg", name: "Side Table 07", tag: "Side Table" },
  { img: "images/products/stool-01.jpg", name: "Stool 01", tag: "Stool" },
  { img: "images/products/stool-02.jpg", name: "Stool 02", tag: "Stool" },
  { img: "images/products/stool-03.jpg", name: "Stool 03", tag: "Stool" },
  { img: "images/products/stool-04.jpg", name: "Stool 04", tag: "Stool" },
  { img: "images/products/stool-05.jpg", name: "Stool 05", tag: "Stool" },
  { img: "images/products/stool-06.jpg", name: "Stool 06", tag: "Stool" },
  { img: "images/products/stool-07.jpg", name: "Stool 07", tag: "Stool" },
  { img: "images/products/stool-08.jpg", name: "Stool 08", tag: "Stool" },
  { img: "images/products/stool-09.jpg", name: "Stool 09", tag: "Stool" },
  { img: "images/products/wall-lamp-01.jpg", name: "Wall Lamp 01", tag: "Wall Lamp" },
  { img: "images/products/wall-lamp-02.jpg", name: "Wall Lamp 02", tag: "Wall Lamp" },
  { img: "images/products/wall-lamp-03.jpg", name: "Wall Lamp 03", tag: "Wall Lamp" },
  { img: "images/products/wall-lamp-04.jpg", name: "Wall Lamp 04", tag: "Wall Lamp" },
  { img: "images/products/wall-lamp-05.jpg", name: "Wall Lamp 05", tag: "Wall Lamp" },
  { img: "images/products/wall-lamp-06.jpg", name: "Wall Lamp 06", tag: "Wall Lamp" },
];

document.addEventListener('DOMContentLoaded', () => {
  buildProductGrid();
  initLoadingScreen();
  initHeaderScroll();
  initMobileNav();
  initActiveNavLink();
  initScrollReveal();
  initLightbox();
  initContactForm();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* -------------------------------------------------------------------------
   LOADING SCREEN
------------------------------------------------------------------------- */
function initLoadingScreen(){
  const screen = document.getElementById('loading-screen');
  const finish = () => screen.classList.add('loaded');
  // Minimum display time so the animation is always seen, even on fast connections.
  const minTime = new Promise(res => setTimeout(res, 2200));
  const pageReady = new Promise(res => {
    if (document.readyState === 'complete') res();
    else window.addEventListener('load', res);
  });
  Promise.all([minTime, pageReady]).then(finish);
}

/* -------------------------------------------------------------------------
   PRODUCT GRID (built from PRODUCTS array)
------------------------------------------------------------------------- */
function buildProductGrid(){
  const grid = document.getElementById('product-grid');
  const frag = document.createDocumentFragment();

  PRODUCTS.forEach((p, i) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'product-card';
    card.setAttribute('data-index', i);
    card.setAttribute('aria-label', `View ${p.name}`);

    card.innerHTML = `
      <img src="${p.img}" alt="${p.name} — Craftech Impex handcrafted export product" loading="lazy">
      <span class="product-card-expand">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span class="product-card-overlay">
        <span class="product-card-tag">${p.tag}</span>
        <span class="product-card-name">${p.name}</span>
      </span>
    `;
    frag.appendChild(card);
  });

  grid.appendChild(frag);

  // Reveal cards as they scroll into view
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  grid.querySelectorAll('.product-card').forEach(card => io.observe(card));
}

/* -------------------------------------------------------------------------
   HEADER — scroll state
------------------------------------------------------------------------- */
function initHeaderScroll(){
  const header = document.getElementById('site-header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* -------------------------------------------------------------------------
   MOBILE NAV
------------------------------------------------------------------------- */
function initMobileNav(){
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');

  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}

/* -------------------------------------------------------------------------
   ACTIVE NAV LINK ON SCROLL
------------------------------------------------------------------------- */
function initActiveNavLink(){
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const id = entry.target.getAttribute('id');
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(s => io.observe(s));
}

/* -------------------------------------------------------------------------
   GENERIC SCROLL REVEAL  ([data-reveal] + .timeline-step + .why-card)
------------------------------------------------------------------------- */
function initScrollReveal(){
  const targets = document.querySelectorAll('[data-reveal], .timeline-step, .why-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  targets.forEach(t => io.observe(t));
}

/* -------------------------------------------------------------------------
   LIGHTBOX
------------------------------------------------------------------------- */
function initLightbox(){
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  let currentIndex = 0;

  function open(index){
    currentIndex = index;
    render();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close(){
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function render(){
    const p = PRODUCTS[currentIndex];
    lbImg.src = p.img;
    lbImg.alt = p.name;
    lbCaption.textContent = `${p.name} — ${p.tag}`;
  }

  function step(dir){
    currentIndex = (currentIndex + dir + PRODUCTS.length) % PRODUCTS.length;
    render();
  }

  document.getElementById('product-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;
    open(parseInt(card.getAttribute('data-index'), 10));
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => step(-1));
  nextBtn.addEventListener('click', () => step(1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
}

/* -------------------------------------------------------------------------
   CONTACT FORM
   NOTE: This currently shows a confirmation message only. To actually send
   enquiries, connect this form to your email service (e.g. Formspree,
   EmailJS, or a backend endpoint) and replace the code inside the
   'submit' handler below.
------------------------------------------------------------------------- */
function initContactForm(){
  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: send form data to your email service / backend here.
    note.textContent = 'Thank you — your enquiry has been received. Our export team will contact you shortly.';
    form.reset();
  });
}
