document.addEventListener("navbarLoaded", () => {
  const toggleBtn = document.getElementById("language-toggle");
  if (!toggleBtn) return;

  let currentLang = "en";

  const t = {
    es: {
      "planning-title": "1. Planificación",
      "planning-text":
        "Rakion fue concebido como un juego multijugador de acción 3D de ritmo rápido enfocado en el combate en tiempo real, la diversidad de personajes y el control estratégico del mapa. Desarrollado por <strong>Softnyx</strong>, el juego buscaba ofrecer una experiencia accesible pero competitiva para jugadores de todo el mundo.",
      genre: "Género: Acción / Estrategia / Multijugador en línea",
      vision:
        "Visión principal: Combinar combate tipo arcade con progresión de personaje estilo RPG",
      audience:
        "Público objetivo: Adolescentes y adultos jóvenes interesados en el PvP competitivo",
      platform: "Plataforma: PC con Windows (requiere DirectX 9.0+)",
      release: "Lanzamiento inicial: Principios de los 2000 (Corea del Sur)",

      "preprod-title": "2. Preproducción",
      "preprod-text":
        "Durante la preproducción, el equipo de Softnyx definió las mecánicas principales, el estilo visual y los requisitos técnicos del juego. Eligieron un estilo 3D estilizado para garantizar el rendimiento en hardware de gama baja manteniendo la claridad visual.",
      "preprod-1":
        "Se crearon los conceptos iniciales de personajes: <em>Guerrero, Mago, Arquero, Asesino</em>",
      "preprod-2":
        "Se diseñaron mapas centrados en el equilibrio y la profundidad táctica",
      "preprod-3":
        "Se seleccionó DirectX 9.0 como API gráfica por su amplia compatibilidad",
      "preprod-4":
        "Se planificó la arquitectura del servidor para sincronización multijugador en tiempo real",
      "preprod-5":
        "Se decidió evitar tramas complejas para priorizar la jugabilidad rápida",

      "production-title": "3. Producción",
      "production-text":
        "La fase de producción implicó programación, creación de recursos, animación e implementación de red. Rakion fue construido con un motor personalizado en C++ optimizado para combates multijugador de baja latencia.",
      "engine-title": "Motor",
      "engine-text": "Motor personalizado en C++ con integración DirectX 9.0",
      "art-title": "Arte",
      "art-text":
        "Modelos 3D de baja poligonización con texturas pintadas a mano",
      "net-title": "Red",
      "net-text":
        "Modelo cliente-servidor con predicción y compensación de retraso",
      "audio-title": "Audio",
      "audio-text": "Efectos de sonido dinámicos y voces de personajes",

      "testing-title": "4. Pruebas",
      "testing-text":
        "Se realizaron pruebas rigurosas para asegurar la estabilidad en una amplia variedad de configuraciones de hardware. Softnyx priorizó el rendimiento en sistemas mínimos mientras optimizaba para equipos más potentes.",
      "sysreq-title": "Requisitos del Sistema",
      "col-component": "Componente",
      "os-min": "Windows 98 / XP",
      "os-rec": "Windows XP",
      "os-opt": "XP o nuevo",
      "cpu-min": "Pentium III 800 MHz",
      "cpu-rec": "Pentium III 1.4 GHz",
      "cpu-opt": "Pentium IV 2 GHz+",
      "ram-min": "256 MB",
      "ram-rec": "256 MB",
      "ram-opt": "512 MB+",
      "gpu-min": "GeForce 2 MX",
      "gpu-rec": "FX 5200 / Radeon 9500",
      "gpu-opt": "GeForce 5700+ / Radeon 9600+",
      "res-min": "640×480",
      "res-rec": "800×600",
      "res-opt": "1024×768+",
      "fps-min": "25",
      "fps-rec": "40",
      "fps-opt": "70",
      "note-text":
        "⚠️ <strong>Nota:</strong> Se recomienda encarecidamente el uso de tarjetas NVIDIA GeForce. Evite TNT, Intel, Rage o Matrox por problemas de compatibilidad.",

      "menu-title": "Proceso del Juego",
      "play-btn": "Jugar",
      "footer-text":
        "© 2025 Guía de Desarrollo de Rakion | Proyecto Educativo de [Tu Nombre]",
      "language-toggle": "English",
    },
    en: {
      "planning-title": "1. Planning",
      "planning-text":
        "Rakion was conceived as a fast-paced, 3D action multiplayer game focused on real-time combat, character diversity, and strategic map control. Developed by <strong>Softnyx</strong>, the game aimed to deliver an accessible yet competitive experience for players worldwide.",
      genre: "Genre: Action / Strategy / Multiplayer Online",
      vision:
        "Core Vision: Combine arcade-style combat with RPG-like character progression",
      audience:
        "Target Audience: Teens and young adults interested in competitive PvP",
      platform: "Platform: Windows PC (DirectX 9.0+ required)",
      release: "Initial Release: Early 2000s (South Korea)",

      "preprod-title": "2. Pre-production",
      "preprod-text":
        "During pre-production, the Softnyx team defined the game’s core mechanics, visual style, and technical requirements. They chose a stylized 3D aesthetic to ensure performance on low-end hardware while maintaining visual clarity.",
      "preprod-1":
        "Created initial character concepts: <em>Warrior, Mage, Archer, Assassin</em>",
      "preprod-2": "Designed map layouts focused on balance and tactical depth",
      "preprod-3":
        "Selected DirectX 9.0 as the graphics API for broad compatibility",
      "preprod-4":
        "Planned server architecture for real-time multiplayer synchronization",
      "preprod-5":
        "Decided against complex storylines to prioritize fast-paced gameplay",

      "production-title": "3. Production",
      "production-text":
        "The production phase involved coding, asset creation, animation, and network implementation. Rakion was built using a custom C++ engine optimized for low-latency multiplayer combat.",
      "engine-title": "Engine",
      "engine-text": "Custom C++ engine with DirectX 9.0 integration",
      "art-title": "Art",
      "art-text": "Low-poly 3D models with hand-painted textures",
      "net-title": "Networking",
      "net-text": "Client-server model with prediction & lag compensation",
      "audio-title": "Audio",
      "audio-text": "Dynamic sound effects and character voice lines",

      "testing-title": "4. Testing",
      "testing-text":
        "Rigorous testing ensured stability across a wide range of hardware configurations. Softnyx prioritized performance on minimum-spec systems while optimizing for higher-end setups.",
      "sysreq-title": "System Requirements",
      "col-component": "Component",
      "os-min": "Windows 98 / XP",
      "os-rec": "Windows XP",
      "os-opt": "XP or newer",
      "cpu-min": "Pentium III 800 MHz",
      "cpu-rec": "Pentium III 1.4 GHz",
      "cpu-opt": "Pentium IV 2 GHz+",
      "ram-min": "256 MB",
      "ram-rec": "256 MB",
      "ram-opt": "512 MB+",
      "gpu-min": "GeForce 2 MX",
      "gpu-rec": "FX 5200 / Radeon 9500",
      "gpu-opt": "GeForce 5700+ / Radeon 9600+",
      "res-min": "640×480",
      "res-rec": "800×600",
      "res-opt": "1024×768+",
      "fps-min": "25",
      "fps-rec": "40",
      "fps-opt": "70",
      "note-text":
        "⚠️ <strong>Note:</strong> NVIDIA GeForce cards are strongly recommended. Avoid TNT, Intel, Rage, or Matrox GPUs due to compatibility issues.",

      "menu-title": "Game Process",
      "play-btn": "Play",
      "footer-text":
        "© 2025 Rakion Development Guide | Educational Project by [Your Name]",
      "language-toggle": "Español",
    },
  };

  toggleBtn.addEventListener("click", () => {
    const lang = currentLang === "en" ? "es" : "en";

    Object.entries(t[lang]).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = val;
    });

    currentLang = lang;
  });
});
