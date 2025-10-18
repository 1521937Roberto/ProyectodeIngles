// traduccion.js
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("language-toggle");
  let currentLang = "en"; // idioma inicial

  const translations = {
    es: {
      "planning-title": "1. Planificación",
      "planning-text":
        "Rakion fue concebido como un juego multijugador de acción 3D rápido, enfocado en el combate en tiempo real, la diversidad de personajes y el control estratégico del mapa. Desarrollado por Softnyx, el juego buscaba ofrecer una experiencia accesible pero competitiva para jugadores de todo el mundo.",
      "preprod-title": "2. Preproducción",
      "preprod-text":
        "Durante la preproducción, el equipo de Softnyx definió las mecánicas principales, el estilo visual y los requisitos técnicos del juego. Eligieron una estética 3D estilizada para garantizar el rendimiento en hardware de baja gama manteniendo la claridad visual.",
      "production-title": "3. Producción",
      "production-text":
        "La fase de producción implicó programación, creación de recursos, animación e implementación de red. Rakion fue desarrollado con un motor C++ personalizado optimizado para combates multijugador de baja latencia.",
      "testing-title": "4. Pruebas",
      "testing-text":
        "Las rigurosas pruebas aseguraron la estabilidad en una amplia gama de configuraciones de hardware. Softnyx priorizó el rendimiento en sistemas mínimos mientras optimizaba para configuraciones más potentes.",
      "footer-text":
        "© 2025 Guía de Desarrollo de Rakion | Proyecto Educativo de [Tu Nombre]",
      "language-toggle": "English",
    },
    en: {
      "planning-title": "1. Planning",
      "planning-text":
        "Rakion was conceived as a fast-paced, 3D action multiplayer game focused on real-time combat, character diversity, and strategic map control. Developed by Softnyx, the game aimed to deliver an accessible yet competitive experience for players worldwide.",
      "preprod-title": "2. Pre-production",
      "preprod-text":
        "During pre-production, the Softnyx team defined the game’s core mechanics, visual style, and technical requirements. They chose a stylized 3D aesthetic to ensure performance on low-end hardware while maintaining visual clarity.",
      "production-title": "3. Production",
      "production-text":
        "The production phase involved coding, asset creation, animation, and network implementation. Rakion was built using a custom C++ engine optimized for low-latency multiplayer combat.",
      "testing-title": "4. Testing",
      "testing-text":
        "Rigorous testing ensured stability across a wide range of hardware configurations. Softnyx prioritized performance on minimum-spec systems while optimizing for higher-end setups.",
      "footer-text":
        "© 2025 Rakion Development Guide | Educational Project by [Your Name]",
      "language-toggle": "Español",
    },
  };

  toggleBtn.addEventListener("click", function () {
    const toLang = currentLang === "en" ? "es" : "en";

    // recorre las claves de traducción
    for (const [id, text] of Object.entries(translations[toLang])) {
      const element = document.getElementById(id);
      if (element) element.innerText = text;
    }

    currentLang = toLang;
  });
});
