<script lang="ts">
  // WhatsApp y metadatos
  const whatsappNumber = "6252050935"; // tu número sin '+'
  const message = "Hola, me interesa crear una página web para mi negocio con ALEX'S TECHNOLOGY";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const currentYear = new Date().getFullYear();

  const beneficios = [
    {
      title: "Credibilidad y confianza",
      desc: "Un sitio profesional legitima tu marca y genera seguridad desde el primer contacto."
    },
    {
      title: "Disponible 24/7",
      desc: "Tu negocio atiende consultas, recibe mensajes y muestra catálogo incluso cuando duermes."
    },
    {
      title: "Más clientes con SEO",
      desc: "Optimizamos tu web para que te encuentren cuando te buscan: productos, servicios y ubicación."
    },
    {
      title: "Control de tu marca",
      desc: "No dependas solo de redes sociales. Tu web es tu espacio, tu mensaje y tu base de datos."
    },
    {
      title: "Automatiza y ahorra",
      desc: "Formularios, agendado, WhatsApp directo y bots que reducen tareas repetitivas."
    },
    {
      title: "Mide y mejora",
      desc: "Instalamos analítica para entender visitas, conversiones y decidir con datos."
    }
  ];

  const incluye = [
    "Diseño responsive (móvil, tablet y escritorio)",
    "Velocidad y rendimiento optimizados",
    "SEO básico on-page (metadatos, sitemap, estructura)",
    "Integración a WhatsApp y formularios de contacto",
    "Enlaces a redes sociales",
    "Certificado SSL y buenas prácticas de seguridad",
    "Soporte inicial y guía de uso"
  ];

  const pasos = [
    { n: 1, t: "Descubrimiento", d: "Entendemos objetivos, público y propuesta de valor." },
    { n: 2, t: "Propuesta & UX", d: "Estructura de páginas, copy y layout pensado para convertir." },
    { n: 3, t: "Diseño & Desarrollo", d: "Construimos tu web con estándares modernos y rendimiento." },
    { n: 4, t: "Lanzamiento", d: "Pruebas, SEO básico, analítica y publicación." },
    { n: 5, t: "Soporte", d: "Ajustes finos y mejoras continuas según resultados." }
  ];

  const faqs = [
    {
      q: "¿En cuánto tiempo está lista?",
      a: "Una landing suele estar en 5–7 días, web corporativa en 1–2 semanas y e-commerce en 2–3 semanas, según alcance."
    },
    {
      q: "¿Qué necesito para empezar?",
      a: "Logo, paleta o referencias de estilo, texto/fotos (si tienes) y tus objetivos. Si no, te ayudamos a definirlo."
    },
    {
      q: "¿Puedo pedir cambios después?",
      a: "Sí. Incluimos rondas de ajuste y ofrecemos planes de mantenimiento para evolutivos."
    },
    {
      q: "¿Incluye SEO?",
      a: "Sí, SEO on-page básico (metadatos, estructura, sitemap). También podemos cotizar SEO avanzado."
    }
  ];
</script>

<svelte:head>
  <title>Beneficios de tener una página web | ALEX'S TECHNOLOGY</title>
  <meta name="description" content="Descubre por qué una página web profesional impulsa tu negocio: más credibilidad, clientes y ventas. Desarrollamos sitios rápidos, modernos y listos para convertir." />
</svelte:head>

<!-- Fondo -->
<div class="fixed inset-0 z-0 overflow-hidden">
  <div class="absolute inset-0 bg-noise opacity-10"></div>
  <div class="animated-bg"></div>
</div>

<!-- Contenido -->
<div class="relative z-10">
  <!-- HERO -->
  <section class="max-w-7xl mx-auto px-6 pt-20 pb-12 text-center">
    <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
      Convierte visitas en clientes con una
      <span class="gradient-animated animate-gradient bg-clip-text text-transparent">página web profesional</span>
    </h1>
    <p class="mt-5 text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-space-mono">
      En ALEX'S TECHNOLOGY construimos sitios rápidos, modernos y enfocados a resultados.
      Tú te enfocas en vender, nosotros en que tu web lo haga posible.
    </p>
    <div class="mt-8 flex items-center justify-center gap-4">
      <a href={whatsappLink} target="_blank" class="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold shadow-neon-green-light hover:scale-105 transition-transform">Quiero mi propuesta</a>
      <a href="/#paquetes" class="px-6 py-3 rounded-xl glass hover:bg-white/10 transition-colors hover:scale-105 transition-transform">Ver paquetes</a>
    </div>
    <div class="mt-10 max-w-4xl mx-auto glass rounded-2xl p-6 md:p-8 shadow-neon">
      <p class="text-white/90 font-space-mono">
        🎯 <span class="font-semibold text-cyan-300">Beneficio inmediato:</span> más confianza, más visibilidad y más contactos calificados.
      </p>
    </div>
  </section>

  <!-- BENEFICIOS GRID -->
  <section class="max-w-7xl mx-auto px-6 py-16">
    <h2 class="text-3xl md:text-4xl font-bold mb-8 font-orbitron">¿Por qué tu negocio necesita un sitio web?</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each beneficios as b}
        <div class="glass rounded-2xl p-6 hover:shadow-neon-cyan-hover transition-all card-hover-effect">
          <h3 class="text-xl font-semibold mb-2 font-orbitron">{b.title}</h3>
          <p class="text-white/80 font-space-mono">{b.desc}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- QUÉ INCLUYE -->
  <section class="max-w-7xl mx-auto px-6 py-16">
    <h2 class="text-3xl md:text-4xl font-bold mb-8 font-orbitron">¿Qué incluye con nosotros?</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="glass rounded-2xl p-6 shadow-neon">
        <ul class="space-y-3 text-white/90 font-space-mono">
          {#each incluye as item}
            <li>✅ {item}</li>
          {/each}
        </ul>
        <div class="mt-6">
          <a href={whatsappLink} target="_blank" class="inline-block px-5 py-3 rounded-xl bg-emerald-400 text-black font-bold shadow-neon-green-light hover:scale-105 transition-transform">Solicitar cotización</a>
        </div>
      </div>
      <div class="glass rounded-2xl p-6">
        <h3 class="text-xl font-semibold mb-2 font-orbitron">Tu web como motor de ventas</h3>
        <p class="text-white/80 font-space-mono">
          Diseñamos el flujo de contenido para que guíe al visitante: propuesta de valor clara, prueba social (testimonios),
          llamadas a la acción estratégicas y contacto fácil (WhatsApp, formularios).
        </p>
        <div class="mt-4 text-white/80 font-space-mono">
          <p>➤ Integración con catálogos, agendado y automatización básica.</p>
          <p>➤ Performance y seguridad desde el inicio.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PROCESO -->
  <section class="max-w-7xl mx-auto px-6 py-16">
    <h2 class="text-3xl md:text-4xl font-bold mb-8 font-orbitron">Nuestro proceso</h2>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
      {#each pasos as p}
        <div class="glass rounded-2xl p-5 text-center">
          <div class="text-3xl font-bold text-cyan-300 font-orbitron">{p.n}</div>
          <div class="mt-2 font-semibold">{p.t}</div>
          <div class="text-white/80 text-sm font-space-mono mt-1">{p.d}</div>
        </div>
      {/each}
    </div>
  </section>

  <!-- FAQs -->
  <section class="max-w-7xl mx-auto px-6 py-16">
    <h2 class="text-3xl md:text-4xl font-bold mb-8 font-orbitron">Preguntas frecuentes</h2>
    <div class="space-y-4">
      {#each faqs as f}
        <details class="glass rounded-2xl p-4">
          <summary class="cursor-pointer font-semibold">{f.q}</summary>
          <p class="mt-2 text-white/80 font-space-mono">{f.a}</p>
        </details>
      {/each}
    </div>
  </section>

  <!-- CTA FINAL -->
  <section class="max-w-7xl mx-auto px-6 pb-24">
    <div class="glass rounded-2xl p-8 md:p-10 text-center shadow-neon">
      <h3 class="text-2xl md:text-3xl font-bold font-orbitron">¿Listo para empezar?</h3>
      <p class="text-white/80 mt-2 font-space-mono">Cuéntanos sobre tu negocio y te enviamos una propuesta en menos de 24 horas.</p>
      <div class="mt-6 flex items-center justify-center gap-4">
        <a href={whatsappLink} target="_blank" class="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold shadow-neon-green-light hover:scale-105 transition-transform">Hablar por WhatsApp</a>
        <a href="/#paquetes" class="px-6 py-3 rounded-xl glass hover:bg-white/10 transition-colors hover:scale-105 transition-transform">Ver paquetes</a>
      </div>
    </div>
  </section>

  <footer class="border-t border-white/10 py-8 text-center text-white/70">
    <p class="font-orbitron tracking-widest text-white/80">ALEX'S TECHNOLOGY</p>
    <p class="text-sm mt-1 font-space-mono">© {currentYear} — Todos los derechos reservados.</p>
  </footer>
</div>

<style>
  :global(.font-orbitron){ font-family:'Orbitron',sans-serif; }
  :global(.font-space-mono){ font-family:'Space Mono',monospace; }

  .glass { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.08); }
  .gradient-animated { background-image: linear-gradient(90deg,#22d3ee,#a78bfa,#34d399); }
  .animate-gradient { animation: hue 12s linear infinite; }
  @keyframes hue { from{ filter:hue-rotate(0deg);} to{ filter:hue-rotate(360deg);} }
  .bg-noise { background-image: radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px); background-size: 3px 3px; }

  /* Sombras “neón” para coherencia visual */
  .shadow-neon, .shadow-neon-green-light, .hover\:shadow-neon-cyan-hover, .hover\:shadow-neon-fuchsia-hover {
    box-shadow: 0 10px 30px rgba(0,0,0,.35);
  }
  .card-hover-effect:hover { transform: translateY(-2px); transition: transform .15s ease; }
</style>
