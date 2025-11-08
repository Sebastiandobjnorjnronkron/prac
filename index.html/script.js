// === NEXO universal script (React + HTML + loader animado) ===
(function () {
  console.log("🧠 NEXO script cargado correctamente...");

  // --- 🎮 LOADER ANIMADO (aparece antes de que cargue React) ---
  const loader = document.createElement("div");
  loader.innerHTML = `
    <div id="nexo-loader" style="
      position:fixed;top:0;left:0;width:100%;height:100%;
      background: radial-gradient(circle at center, #0f172a, #020617);
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      z-index:9999;color:#67e8f9;font-family:Poppins;font-weight:600;
      letter-spacing:1px;text-align:center;">
      
      <div style="width:80px;height:80px;border:6px solid #38bdf8;
        border-top-color:#9333ea;border-radius:50%;
        animation:spin 1s linear infinite;box-shadow:0 0 25px rgba(56,189,248,0.6);">
      </div>
      <p style="margin-top:20px;font-size:1.3rem;">⚡ Cargando <span style="color:#a855f7;">NEXO</span>...</p>
    </div>

    <style>
      @keyframes spin { from {transform:rotate(0deg);} to {transform:rotate(360deg);} }
    </style>
  `;
  document.body.appendChild(loader);

  // --- ⏳ FUNCIÓN SEGURA QUE SE EJECUTA CUANDO TODO ESTÁ LISTO ---
  function safeInit(attempt = 0) {
    const root = document.getElementById("root");
    const header = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle, #menu-toggle");
    const menu = document.querySelector("nav.menu, #menu");

    // Si React o el contenido todavía no montaron, volver a intentar
    if ((!root || !header) && attempt < 60) {
      return setTimeout(() => safeInit(attempt + 1), 100);
    }

    // Cuando todo cargó correctamente, quitar el loader
    const l = document.getElementById("nexo-loader");
    if (l) {
      l.style.opacity = "0";
      l.style.transition = "opacity 0.6s ease";
      setTimeout(() => l.remove(), 600);
    }

    console.log("✅ NEXO inicializado sin errores.");

    // === BOTONES DE COMPRA ===
    document.querySelectorAll(".btn-comprar").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (btn.id === "startGame" || btn.closest(".game-container")) return;
        e.preventDefault();
        alert("🛒 Compra próximamente disponible. Contáctanos para reservar.");
      });
    });

    // === FORMULARIO DE CONTACTO ===
    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("📩 Gracias — tu mensaje fue enviado (simulado).");
        contactForm.reset();
      });
    }

    // === MENÚ HAMBURGUESA ===
    if (menuToggle && menu) {
      menuToggle.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        menu.classList.toggle("activo");
      });
    }

    // === ENLACE ACTIVO ===
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("header nav a").forEach((a) => {
      const href = a.getAttribute("href");
      if (
        href === current ||
        (href === "index.html" &&
          (location.pathname === "/" ||
            location.pathname.endsWith("index.html")))
      ) {
        a.classList.add("activo");
      } else {
        a.classList.remove("activo");
      }
    });
  }

  // --- 🚀 EJECUTAR INICIALIZACIÓN ---
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => safeInit());
  } else {
    safeInit();
  }
})();
