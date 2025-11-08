// script.js - versión estable universal (sin carrito)
document.addEventListener("DOMContentLoaded", () => {
  // === BOTONES DE COMPRA ===
  document.querySelectorAll(".btn-comprar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Evitar interferir con el juego o formularios
      if (btn.id === "startGame" || btn.closest(".game-container")) return;
      e.preventDefault();
      alert("🛒 Compra próximamente disponible. Contáctanos para reservar.");
    });
  });

  // === FORMULARIO DE CONTACTO (solo si existe) ===
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("📩 Gracias — tu mensaje fue enviado (simulado). Nos comunicaremos pronto.");
      contactForm.reset();
    });
  }

  // === ENLACE ACTIVO EN MENÚ ===
  try {
    const currentPage = location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll("header nav a");

    links.forEach((a) => {
      const href = a.getAttribute("href");
      if (
        href === currentPage ||
        (href === "index.html" &&
          (location.pathname === "/" ||
            location.pathname.endsWith("index.html")))
      ) {
        a.classList.add("activo");
      } else {
        a.classList.remove("activo");
      }
    });
  } catch (err) {
    console.warn("⚠️ Error al marcar enlace activo:", err);
  }

  // === MENÚ HAMBURGUESA ===
  try {
    const toggle = document.querySelector(".menu-toggle, #menu-toggle");
    const menu = document.querySelector("nav.menu, #menu");

    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        menu.classList.toggle("activo");
        menu.classList.toggle("hidden"); // compatibilidad con Tailwind
      });
    }
  } catch (err) {
    console.warn("⚠️ Error en el menú hamburguesa:", err);
  }
});
