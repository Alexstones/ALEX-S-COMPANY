<script lang="ts">
  // WhatsApp
  const whatsappNumber = "6252050935";
  const message = "Hola, me interesa una cotización después de ver su portafolio.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Data de ejemplo (cámbiala por casos reales)
  const proyectos = [
    {
      nombre: "Tienda Urbana",
      tipo: "E-commerce",
      resultado: "↑ 38% en conversiones",
      descripcion: "Catálogo, carrito, pagos y analítica para optimizar ventas.",
      tags: ["Stripe", "SEO", "Inventario"]
    },
    {
      nombre: "Consultora Delta",
      tipo: "Web Corporativa",
      resultado: "↑ 2.3x leads",
      descripcion: "Arquitectura de contenidos + formularios + embudos simples.",
      tags: ["Formularios", "Analytics", "CMS"]
    },
    {
      nombre: "Clínica Nova",
      tipo: "Landing Page",
      resultado: "↑ 52% citas online",
      descripcion: "Landing de servicios con WhatsApp, mapas y reseñas.",
      tags: ["UX", "Mapa", "Reseñas"]
    },
    {
      nombre: "La Esquina",
      tipo: "Restaurante",
      resultado: "↑ 27% reservas",
      descripcion: "Carta online, links a apps de delivery y horarios dinámicos.",
      tags: ["Menú", "Delivery", "Reservas"]
    },
    {
      nombre: "Academia CodeUp",
      tipo: "Membresías",
      resultado: "↑ 3x ingresos MRR",
      descripcion: "ÁREA privada, pagos recurrentes y automatizaciones.",
      tags: ["Stripe", "Auth", "Email"]
    },
    {
      nombre: "Eventos K",
      tipo: "Landing + Tickets",
      resultado: "↑ 41% ventas",
      descripcion: "Landing de evento con tickets y confirmación por correo.",
      tags: ["Tickets", "Email", "SEO"]
    }
  ];

  const testimonios = [
    { autor: "María G.", rol: "Dueña • Tienda Urbana", texto: "Pasamos de vender poco a tener un flujo constante. La web carga rápido y convierte." },
    { autor: "Ing. Ricardo P.", rol: "Director • Consultora Delta", texto: "El sitio se posicionó mejor y ahora llegan más consultas calificadas." },
    { autor: "Dra. Sofía N.", rol: "Directora • Clínica Nova", texto: "Los pacientes agendan por la web sin fricción. El WhatsApp integrado es clave." }
  ];
</script>

<svelte:head>
  <title>Portafolio | ALEX’S TECHNOLOGY</title>
  <meta name="description" content="Casos de éxito y proyectos web: e-commerce, corporativos y landings que convierten. Ver ejemplos y resultados." />
</svelte:head>

<!-- HERO con logo “technology.jpeg” a pantalla completa -->
<section class="relative min-h-[64vh] md:min-h-[72vh] overflow-hidden">
  <!-- Fondo: logo gigante -->
  <img
    src="/technology.jpeg"
    alt="ALEX’S TECHNOLOGY"
    class="absolute inset-0 w-full h-full object-contain md:object-cover pointer-events-none select-none opacity-[0.12]"
    style="mix-blend:screen; filter:saturate(110%) contrast(105%);"
  />
  <!-- Capa para contraste -->
  <div class="absolute inset-0 bg-black/35 md:bg-black/25"></div>
  <!-- Texturas existentes (si tu layout no las trae, quedan acá) -->
  <div class="absolute inset-0 bg-noise opacity-10"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
    <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
      Nuestro <span class="gradient-animated animate-gradient bg-clip-text text-transparent">Portafolio</span>
    </h1>
    <p class="mt-5 text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-space-mono">
      Sitios rápidos, modernos y listos para convertir: e-commerce, web corporativa y landings.
    </p>
    <div class="mt-8 flex items-center justify-center gap-4">
      <a href={whatsappLink} target="_blank" class="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold shadow-neon-green-light hover:scale-105 transition-transform">
        Solicitar Cotización
      </a>
      <a href="/#paquetes" class="px-6 py-3 rounded-xl glass hover:bg-white/10 transition-colors hover:scale-105 transition-transform">
        Ver Paquetes
      </a>
    </div>
  </div>
</section>

<!-- PROYECTOS -->
<section class="max-w-7xl mx-auto px-6 py-16">
  <h2 class="text-3xl md:text-4xl font-bold mb-8 font-orbitron">Casos de éxito</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each proyectos as p}
      <article class="glass rounded-2xl p-6 hover:shadow-neon-cyan-hover transition-all card-hover-effect">
        <!-- Puedes reemplazar esta imagen por una captura real del proyecto -->
        <div class="rounded-xl overflow-hidden mb-4 border border-white/10">
          <img src="/company.jpeg" alt={p.nombre} class="w-full h-40 object-cover opacity-90" />
        </div>
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-semibold font-orbitron">{p.nombre}</h3>
          <span class="badge">{p.tipo}</span>
        </div>
        <p class="mt-2 text-white/80 text-sm font-space-mono">{p.descripcion}</p>
        <div class="mt-3 text-emerald-300 font-bold font-space-mono">{p.resultado}</div>
        <div class="mt-3 flex flex-wrap gap-2">
          {#each p.tags as t}
            <span class="tag">#{t}</span>
          {/each}
        </div>
      </article>
    {/each}
  </div>

  <div class="mt-10 text-center">
    <a href={whatsappLink} target="_blank" class="inline-block px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold shadow-neon-green-light hover:scale-105 transition-transform">
      Quiero un proyecto así
    </a>
  </div>
</section>

<!-- TESTIMONIOS -->
<section class="max-w-7xl mx-auto px-6 py-16">
  <h2 class="text-3xl md:text-4xl font-bold mb-8 font-orbitron">Lo que dicen nuestros clientes</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each testimonios as t}
      <blockquote class="glass rounded-2xl p-6">
        <p class="text-white/90">“{t.texto}”</p>
        <footer class="mt-3 text-sm text-white/70 font-space-mono">— {t.autor} · {t.rol}</footer>
      </blockquote>
    {/each}
  </div>
</section>

<!-- CTA FINAL -->
<section class="max-w-7xl mx-auto px-6 pb-24">
  <div class="glass rounded-2xl p-8 md:p-10 text-center shadow-neon">
    <h3 class="text-2xl md:text-3xl font-bold font-orbitron">¿Listo para tu caso de éxito?</h3>
    <p class="text-white/80 mt-2 font-space-mono">Te enviamos una propuesta en menos de 24 horas.</p>
    <div class="mt-6 flex items-center justify-center gap-4">
      <a href={whatsappLink} target="_blank" class="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold shadow-neon-green-light hover:scale-105 transition-transform">
        Hablar por WhatsApp
      </a>
      <a href="/#paquetes" class="px-6 py-3 rounded-xl glass hover:bg-white/10 transition-colors hover:scale-105 transition-transform">
        Ver paquetes
      </a>
    </div>
  </div>
</section>

<style>
  /* Utilidades usadas aquí (siguen tu estética) */
  .glass { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.08); }
  .gradient-animated { background-image: linear-gradient(90deg,#22d3ee,#a78bfa,#34d399); }
  .animate-gradient { animation: hue 12s linear infinite; }
  @keyframes hue { from{ filter:hue-rotate(0deg);} to{ filter:hue-rotate(360deg);} }
  .bg-noise { background-image: radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px); background-size: 3px 3px; }
  .card-hover-effect:hover { transform: translateY(-2px); transition: transform .15s ease; }

  .badge {
    background: linear-gradient(90deg,#22d3ee,#a78bfa);
    color:#000; font-weight:800; font-size:.75rem;
    padding:.25rem .5rem; border-radius:.5rem;
  }
  .tag {
    font-size:.75rem; color:#cbd5e1; border:1px solid rgba(255,255,255,.12);
    padding:.15rem .5rem; border-radius:.5rem;
  }
</style>
