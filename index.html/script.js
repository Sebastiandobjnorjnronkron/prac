// script.js - sin carrito
document.addEventListener("DOMContentLoaded", () => {
  // Botones de compra: muestran aviso (no hay carrito)
  document.querySelectorAll(".btn-comprar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Si el botón es parte del juego o formulario, ignorar (game tiene su propio script)
      if (btn.id === "startGame" || btn.closest(".game-container")) return;
      e.preventDefault();
      alert("Compra próximamente disponible. Contáctanos para reservar.");
    });
  });

  // Contact form: evitar envío real, mostrar confirmación simulada
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // puedes reemplazar esto por integración con Formspree o EmailJS si quieres
      alert(
        "Gracias — tu mensaje fue enviado (simulado). Nos comunicaremos pronto."
      );
      contactForm.reset();
    });
  }

  // Marcar enlace activo en el menú según URL
  const links = document.querySelectorAll("header nav a");
  links.forEach((a) => {
    try {
      const href = a.getAttribute("href");
      if (
        href === location.pathname.split("/").pop() ||
        (href === "index.html" &&
          (location.pathname === "/" ||
            location.pathname.endsWith("index.html")))
      ) {
        a.classList.add("activo");
      } else {
        a.classList.remove("activo");
      }
    } catch (err) {
      /* ignore */
    }
  });
});
// === Menú hamburguesa ===
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav.menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("activo");
    });
  }
});
