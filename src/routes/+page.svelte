<script lang="ts">
    const whatsappNumber = "5210000000000"; // <-- cámbialo a tu número sin "+"
    const message = "Hola, estoy interesado en una página web de ALEX'S TECHNOLOGY";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
    // Script para manejar el año en el footer
    const currentYear = new Date().getFullYear();
  </script>
  
  <svelte:head>
    <title>ALEX'S TECHNOLOGY - Diseño Web</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Space+Mono&display=swap" rel="stylesheet" />
  </svelte:head>
  
  <div class="fixed inset-0 z-0 overflow-hidden">
    <div class="absolute inset-0 bg-noise opacity-10"></div>
    <div class="animated-bg"></div>
  </div>
  
  <div class="relative z-10">
    <nav class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl gradient-animated animate-gradient shadow-neon-logo"></div>
        <span class="font-orbitron text-xl tracking-widest">ALEX’S TECHNOLOGY</span>
      </div>
      <div class="hidden md:flex items-center gap-6 text-sm font-space-mono">
        <a href="#servicios" class="hover:text-cyan-300 transition-colors">Servicios</a>
        <a href="#paquetes" class="hover:text-cyan-300 transition-colors">Paquetes</a>
        <a href="#contacto" class="hover:text-cyan-300 transition-colors">Contacto</a>
        <a href={whatsappLink} target="_blank"
          class="px-4 py-2 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold shadow-neon-blue-light transition-all">
          Cotizar
        </a>
      </div>
    </nav>
  
    <section class="relative overflow-hidden">
      <div class="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-25"
        style="background: radial-gradient(circle at center, #60a5fa, transparent 60%);"></div>
      <div class="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-25"
        style="background: radial-gradient(circle at center, #a78bfa, transparent 60%);"></div>
  
      <div class="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
          Impulsa tu negocio con
          <span class="gradient-animated animate-gradient bg-clip-text text-transparent">tecnología web</span>
          de alto impacto
        </h1>
        <p class="mt-5 text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-space-mono">
          Diseño y desarrollo web <span class="text-cyan-300">rápido</span>, <span class="text-fuchsia-300">moderno</span> y
          <span class="text-emerald-300">enfocado a convertir</span>.
        </p>
  
        <div class="mt-8 flex items-center justify-center gap-4">
          <a href={whatsappLink} target="_blank"
            class="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold shadow-neon-green-light hover:scale-105 transition-transform">
            Solicitar Cotización
          </a>
          <a href="#servicios"
            class="px-6 py-3 rounded-xl glass hover:bg-white/10 transition-colors hover:scale-105 transition-transform">
            Ver Servicios
          </a>
        </div>
  
        <div class="mt-12 max-w-5xl mx-auto glass rounded-2xl p-6 md:p-8 shadow-neon">
          <p class="text-white/90 font-space-mono">
            🎯 <span class="font-semibold text-cyan-300">Oferta de lanzamiento:</span>
            20% de descuento + 1 mes de mantenimiento gratis.
          </p>
        </div>
      </div>
    </section>
  
    <section id="servicios" class="max-w-7xl mx-auto px-6 py-20">
      <h2 class="text-3xl md:text-4xl font-bold mb-10 font-orbitron">Servicios</h2>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="glass rounded-2xl p-6 hover:shadow-neon-cyan-hover transition-all card-hover-effect">
          <h3 class="text-xl font-semibold mb-2 font-orbitron">Landing Page</h3>
          <p class="text-white/80 font-space-mono">Sección única optimizada para móviles y conversiones.</p>
          <div class="mt-4 text-cyan-300 font-bold font-space-mono">$150 USD</div>
        </div>
  
        <div class="glass rounded-2xl p-6 hover:shadow-neon-fuchsia-hover transition-all card-hover-effect">
          <h3 class="text-xl font-semibold mb-2 font-orbitron">Web Corporativa</h3>
          <p class="text-white/80 font-space-mono">Hasta 5 secciones, SEO básico e integración con redes.</p>
          <div class="mt-4 text-fuchsia-300 font-bold font-space-mono">$300 USD</div>
        </div>
  
        <div class="glass rounded-2xl p-6 hover:shadow-neon-emerald-hover transition-all card-hover-effect">
          <h3 class="text-xl font-semibold mb-2 font-orbitron">E-commerce</h3>
          <p class="text-white/80 font-space-mono">Tienda completa con carrito y pasarela de pago.</p>
          <div class="mt-4 text-emerald-300 font-bold font-space-mono">$500 USD</div>
        </div>
      </div>
    </section>
  
    <section id="paquetes" class="max-w-7xl mx-auto px-6 pb-20">
      <h2 class="text-3xl md:text-4xl font-bold mb-10 font-orbitron">Paquetes</h2>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="glass rounded-2xl p-6 border border-white/10 hover:shadow-neon-cyan-hover transition-all card-hover-effect">
          <h3 class="text-xl font-semibold font-orbitron">Starter</h3>
          <ul class="mt-3 text-white/80 space-y-2 list-inside font-space-mono">
            <li><span class="text-cyan-300">➤</span> Landing Page</li>
            <li><span class="text-cyan-300">➤</span> SSL + Hosting 1 año</li>
            <li><span class="text-cyan-300">➤</span> Entrega rápida</li>
          </ul>
          <div class="mt-4 font-bold text-cyan-300 font-space-mono">$150 USD</div>
          <a href={whatsappLink} target="_blank" class="mt-5 inline-block px-5 py-2 rounded-lg bg-cyan-400 text-black font-bold shadow-neon-blue-light hover:scale-105 transition-transform">Contratar</a>
        </div>
  
        <div class="glass rounded-2xl p-6 border border-white/10 hover:shadow-neon-fuchsia-hover transition-all card-hover-effect">
          <h3 class="text-xl font-semibold font-orbitron">Business</h3>
          <ul class="mt-3 text-white/80 space-y-2 list-inside font-space-mono">
            <li><span class="text-fuchsia-300">➤</span> Web corporativa (hasta 5 secciones)</li>
            <li><span class="text-fuchsia-300">➤</span> SEO básico</li>
            <li><span class="text-fuchsia-300">➤</span> 1 mes de mantenimiento</li>
          </ul>
          <div class="mt-4 font-bold text-fuchsia-300 font-space-mono">$300 USD</div>
          <a href={whatsappLink} target="_blank" class="mt-5 inline-block px-5 py-2 rounded-lg bg-fuchsia-400 text-black font-bold shadow-neon-pink-light hover:scale-105 transition-transform">Contratar</a>
        </div>
  
        <div class="glass rounded-2xl p-6 border border-white/10 hover:shadow-neon-emerald-hover transition-all card-hover-effect">
          <h3 class="text-xl font-semibold font-orbitron">E-commerce Pro</h3>
          <ul class="mt-3 text-white/80 space-y-2 list-inside font-space-mono">
            <li><span class="text-emerald-300">➤</span> Tienda con pasarela de pago</li>
            <li><span class="text-emerald-300">➤</span> Gestión de inventario</li>
            <li><span class="text-emerald-300">➤</span> SEO + mantenimiento 1 mes</li>
          </ul>
          <div class="mt-4 font-bold text-emerald-300 font-space-mono">$500 USD</div>
          <a href={whatsappLink} target="_blank" class="mt-5 inline-block px-5 py-2 rounded-lg bg-emerald-400 text-black font-bold shadow-neon-green-light hover:scale-105 transition-transform">Contratar</a>
        </div>
      </div>
    </section>
  
    <section id="contacto" class="max-w-7xl mx-auto px-6 pb-24">
      <div class="glass rounded-2xl p-8 md:p-10 text-center shadow-neon">
        <h3 class="text-2xl md:text-3xl font-bold font-orbitron">¿Listo para despegar tu presencia online?</h3>
        <p class="text-white/80 mt-2 font-space-mono">Escríbenos y te enviamos una propuesta en menos de 24 horas.</p>
        <div class="mt-6 flex items-center justify-center gap-4">
          <a href={whatsappLink} target="_blank"
            class="px-6 py-3 rounded-xl bg-emerald-400 text-black font-bold shadow-neon-green-light hover:scale-105 transition-transform">
            Hablar por WhatsApp
          </a>
          <a href="mailto:contacto@alexstechnology.com"
            class="px-6 py-3 rounded-xl glass hover:bg-white/10 transition-colors hover:scale-105 transition-transform">
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  
    <footer class="border-t border-white/10 py-8 text-center text-white/70">
      <p class="font-orbitron tracking-widest text-white/80">ALEX’S TECHNOLOGY</p>
      <p class="text-sm mt-1 font-space-mono">© {currentYear} — Todos los derechos reservados.</p>
    </footer>
  </div>
  
  <style>
    /* Aquí puedes agregar estilos específicos para tu componente */
    :global(.font-orbitron) {
      font-family: 'Orbitron', sans-serif;
    }
    :global(.font-space-mono) {
      font-family: 'Space Mono', monospace;
    }
  </style>