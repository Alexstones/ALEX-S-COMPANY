<script lang="ts">
  // --- WhatsApp / Metadatos ---
  const whatsappNumber = "6252050935"; // tu número sin '+'
  const message = "Hola, estoy interesado en una página web de ALEX'S TECHNOLOGY";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Año dinámico para el footer
  const currentYear = new Date().getFullYear();

  // --- Chatbot (estado y lógica) ---
  let showChat = false;
  let input = "";
  let messages: { text: string; from: "bot" | "user" }[] = [
    {
      text:
        "👋 ¡Hola! Soy el asistente de ALEX'S TECHNOLOGY. Pregúntame sobre precios, tiempos, mantenimiento o escribe 'cotización' / 'whatsapp'.",
      from: "bot",
    },
  ];

  const faq = [
    { q: "precio", a: "💲 Nuestros paquetes: Starter $150, Business $300 y E-commerce Pro $500." },
    { q: "precios", a: "💲 Nuestros paquetes: Starter $150, Business $300 y E-commerce Pro $500." },
    { q: "tiempo", a: "⏳ Una landing en 5–7 días, web corporativa en 1–2 semanas, e-commerce en 2–3 semanas." },
    { q: "mantenimiento", a: "🛠️ Incluye 1 mes gratis en Business y E-commerce. También tenemos planes extra." },
    { q: "seo", a: "🔎 Incluimos SEO básico: metadatos, sitemap y buenas prácticas on-page." },
    { q: "ecommerce", a: "🛒 Integramos pasarela de pago, inventario y reportes (Stripe/MercadoPago)." },
  ];

  // === Lead form (modal) ===
  let showLeadForm = false;
  let lead = { nombre: "", email: "", tipo: "Landing Page", mensaje: "" };
  let sendingLead = false;
  let sentOk: null | boolean = null;

  function abrirLeadForm() {
    showLeadForm = true;
    sentOk = null;
  }

  async function enviarLead() {
    if (!lead.nombre || !lead.email) {
      alert("Por favor, llena al menos nombre y email.");
      return;
    }
    sendingLead = true;
    try {
      // Si tu API corre en otro dominio, cambia la URL aquí:
      // const API_URL = "https://TU-DOMINIO-API.com/api/lead";
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...lead,
          origen: "Chatbot ALEX'S TECHNOLOGY",
          whatsapp: whatsappLink,
        }),
      });
      sentOk = res.ok;
    } catch (e) {
      sentOk = false;
    } finally {
      sendingLead = false;
      if (sentOk) {
        lead = { nombre: "", email: "", tipo: "Landing Page", mensaje: "" };
        setTimeout(() => (showLeadForm = false), 900);
      }
    }
  }

  function sendMessage() {
    if (!input.trim()) return;
    const userMsg = input.trim();
    messages = [...messages, { text: userMsg, from: "user" }];
    input = "";

    setTimeout(() => {
      const msg = userMsg.toLowerCase();

      // Abrir formulario de cotización por palabras clave
      if (/(cotiza|cotizacion|cotización|presupuesto|precio detallado)/i.test(msg)) {
        messages = [...messages, { text: "📝 Abriré el formulario de cotización.", from: "bot" }];
        abrirLeadForm();
        return;
      }

      // Escalada directa a WhatsApp
      if (/whats?app|hablar|humano/.test(msg)) {
        messages = [...messages, { text: `📲 Escríbenos aquí: ${whatsappLink}`, from: "bot" }];
        return;
      }

      // Búsqueda en FAQ
      const found = faq.find((f) => msg.includes(f.q));
      if (found) {
        messages = [...messages, { text: found.a, from: "bot" }];
        messages = [
          ...messages,
          {
            text:
              "¿Quieres una cotización personalizada? Escribe 'cotización' o toca el botón ‘Quiero una cotización’.",
            from: "bot",
          },
        ];
      } else {
        messages = [
          ...messages,
          {
            text:
              "🤔 No estoy seguro, pero puedo conectarte con un asesor ahora mismo 👉 " +
              whatsappLink,
            from: "bot",
          },
        ];
      }
    }, 350);
  }

  // === Accesibilidad: cierre del modal con teclado en overlay
  function onOverlayKey(e: KeyboardEvent) {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showLeadForm = false;
    }
  }
</script>

<svelte:head>
  <title>ALEX'S TECHNOLOGY - Diseño Web</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Space+Mono&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<!-- Fondo -->
<div class="fixed inset-0 z-0 overflow-hidden">
  <div class="absolute inset-0 bg-noise opacity-10"></div>
  <div class="animated-bg"></div>
</div>

<!-- Contenido -->
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
      <a href="/beneficios" class="hover:text-cyan-300 transition-colors">Beneficios</a>
      <a href="/portafolio">Portafolio</a>
      <a href="/blog" class="hover:text-cyan-300 transition-colors">Blog</a>
      <a href="/aviso-de-privacidad" class="hover:text-cyan-300 transition-colors">Privacidad</a>

      <a
        href={whatsappLink}
        target="_blank"
        class="px-4 py-2 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold shadow-neon-blue-light transition-all"
      >
        Cotizar
      </a>
    </div>
  </nav>

  <section class="relative overflow-hidden">
    <div
      class="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-25"
      style="background: radial-gradient(circle at center, #60a5fa, transparent 60%);"
    ></div>
    <div
      class="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-25"
      style="background: radial-gradient(circle at center, #a78bfa, transparent 60%);"
    ></div>

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
        <a
          href={whatsappLink}
          target="_blank"
          class="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold shadow-neon-green-light hover:scale-105 transition-transform"
        >
          Solicitar Cotización
        </a>
        <a
          href="#servicios"
          class="px-6 py-3 rounded-xl glass hover:bg-white/10 transition-colors hover:scale-105 transition-transform"
        >
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
        <a
          href={whatsappLink}
          target="_blank"
          class="mt-5 inline-block px-5 py-2 rounded-lg bg-cyan-400 text-black font-bold shadow-neon-blue-light hover:scale-105 transition-transform"
          >Contratar</a
        >
      </div>

      <div class="glass rounded-2xl p-6 border border-white/10 hover:shadow-neon-fuchsia-hover transition-all card-hover-effect">
        <h3 class="text-xl font-semibold font-orbitron">Business</h3>
        <ul class="mt-3 text-white/80 space-y-2 list-inside font-space-mono">
          <li><span class="text-fuchsia-300">➤</span> Web corporativa (hasta 5 secciones)</li>
          <li><span class="text-fuchsia-300">➤</span> SEO básico</li>
          <li><span class="text-fuchsia-300">➤</span> 1 mes de mantenimiento</li>
        </ul>
        <div class="mt-4 font-bold text-fuchsia-300 font-space-mono">$300 USD</div>
        <a
          href={whatsappLink}
          target="_blank"
          class="mt-5 inline-block px-5 py-2 rounded-lg bg-fuchsia-400 text-black font-bold shadow-neon-pink-light hover:scale-105 transition-transform"
          >Contratar</a
        >
      </div>

      <div class="glass rounded-2xl p-6 border border-white/10 hover:shadow-neon-emerald-hover transition-all card-hover-effect">
        <h3 class="text-xl font-semibold font-orbitron">E-commerce Pro</h3>
        <ul class="mt-3 text-white/80 space-y-2 list-inside font-space-mono">
          <li><span class="text-emerald-300">➤</span> Tienda con pasarela de pago</li>
          <li><span class="text-emerald-300">➤</span> Gestión de inventario</li>
          <li><span class="text-emerald-300">➤</span> SEO + mantenimiento 1 mes</li>
        </ul>
        <div class="mt-4 font-bold text-emerald-300 font-space-mono">$500 USD</div>
        <a
          href={whatsappLink}
          target="_blank"
          class="mt-5 inline-block px-5 py-2 rounded-lg bg-emerald-400 text-black font-bold shadow-neon-green-light hover:scale-105 transition-transform"
          >Contratar</a
        >
      </div>
    </div>
  </section>

  <section id="contacto" class="max-w-7xl mx-auto px-6 pb-24">
    <div class="glass rounded-2xl p-8 md:p-10 text-center shadow-neon">
      <h3 class="text-2xl md:text-3xl font-bold font-orbitron">¿Listo para despegar tu presencia online?</h3>
      <p class="text-white/80 mt-2 font-space-mono">Escríbenos y te enviamos una propuesta en menos de 24 horas.</p>
      <div class="mt-6 flex items-center justify-center gap-4">
        <a
          href={whatsappLink}
          target="_blank"
          class="px-6 py-3 rounded-xl bg-emerald-400 text-black font-bold shadow-neon-green-light hover:scale-105 transition-transform"
        >
          Hablar por WhatsApp
        </a>
        <a
          href="mailto:contacto@alexstechnology.com"
          class="px-6 py-3 rounded-xl glass hover:bg-white/10 transition-colors hover:scale-105 transition-transform"
        >
          Enviar Email
        </a>
      </div>
    </div>
  </section>

  <footer class="border-t border-white/10 py-8 text-center text-white/70">
    <p class="font-orbitron tracking-widest text-white/80">ALEX’S TECHNOLOGY</p>
    <p class="text-sm mt-1 font-space-mono">© {currentYear} — “No solo desarrollo código. Desarrollo experiencias que generan impacto real.”.</p>
  </footer>

  <!-- ====== CHATBOT FLOTANTE ====== -->
  <button class="chat-fab" on:click={() => (showChat = !showChat)} aria-label="Abrir chat">💬</button>

  {#if showChat}
    <div class="chat-box" role="dialog" aria-label="Asistente virtual">
      <div class="chat-header">Asistente • ALEX’S TECHNOLOGY</div>
      <div class="chat-messages">
        {#each messages as m}
          <div class="msg {m.from}">{m.text}</div>
        {/each}
      </div>
      <div class="chat-input">
        <input
          bind:value={input}
          on:keydown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Escribe tu mensaje..."
          aria-label="Escribe tu mensaje"
        />
        <button on:click={sendMessage} aria-label="Enviar">➤</button>
      </div>
      <div class="chat-cta">
        <button class="cta-btn" on:click={abrirLeadForm}>📝 Quiero una cotización</button>
      </div>
    </div>
  {/if}
  <!-- ====== /CHATBOT FLOTANTE ====== -->

  <!-- ====== MODAL LEAD ====== -->
  {#if showLeadForm}
    <!-- Overlay accesible -->
    <div
      class="lead-overlay"
      role="button"
      aria-label="Cerrar formulario"
      tabindex="0"
      on:click={() => (showLeadForm = false)}
      on:keydown={onOverlayKey}
    ></div>

    <!-- Modal accesible -->
    <div
      class="lead-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-title"
      tabindex="-1"
      on:click|stopPropagation
      on:keydown|stopPropagation={(e) => { if (e.key === 'Escape') showLeadForm = false; }}
    >
      <h4 id="lead-title" class="lead-title">Solicitar cotización</h4>

      <div class="lead-grid">
        <label>
          <span>Nombre</span>
          <input bind:value={lead.nombre} placeholder="Tu nombre" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" bind:value={lead.email} placeholder="tunombre@email.com" />
        </label>
        <label>
          <span>Tipo de sitio</span>
          <select bind:value={lead.tipo}>
            <option>Landing Page</option>
            <option>Web Corporativa</option>
            <option>E-commerce</option>
          </select>
        </label>
        <label class="col-span-2">
          <span>Mensaje</span>
          <textarea rows="4" bind:value={lead.mensaje} placeholder="Cuéntanos qué necesitas…"></textarea>
        </label>
      </div>

      <div class="lead-actions">
        <button class="btn-cancel" on:click={() => (showLeadForm = false)}>Cancelar</button>
        <button class="btn-send" on:click={enviarLead} disabled={sendingLead}>
          {#if sendingLead} Enviando… {/if}
          {#if !sendingLead} Enviar {/if}
        </button>
      </div>

      {#if sentOk === true}
        <p class="lead-ok">✅ ¡Gracias! Te contactaremos en menos de 24h.</p>
      {:else if sentOk === false}
        <p class="lead-error">❌ Hubo un problema. Escríbenos por WhatsApp:
          <a href={whatsappLink} target="_blank">{whatsappLink}</a>
        </p>
      {/if}
    </div>
  {/if}
  <!-- ====== /MODAL LEAD ====== -->
</div>

<style>
  /* Fuentes globales */
  :global(.font-orbitron) { font-family: 'Orbitron', sans-serif; }
  :global(.font-space-mono) { font-family: 'Space Mono', monospace; }

  /* --- Chatbot styles (neón/oscuro) --- */
  .chat-fab{
    position:fixed;bottom:20px;right:20px;z-index:60;
    background:#22d3ee;color:#000;border:none;border-radius:999px;
    padding:14px 16px;font-size:20px;font-weight:700;cursor:pointer;
    box-shadow:0 8px 28px rgba(0,0,0,.35), 0 0 20px rgba(34,211,238,.6);
    transition:transform .15s ease;
  }
  .chat-fab:hover{ transform:scale(1.05); }

  .chat-box{
    position:fixed;bottom:84px;right:20px;z-index:60;
    width:340px;max-height:520px;display:flex;flex-direction:column;overflow:hidden;
    background:#0f172a;border:1px solid rgba(34,211,238,.35);border-radius:16px;
    box-shadow:0 20px 50px rgba(0,0,0,.45), 0 0 40px rgba(168,85,247,.25);
    backdrop-filter:saturate(140%) blur(4px);
  }
  .chat-header{
    padding:10px 12px;text-align:center;font-weight:800;color:#000;
    background:linear-gradient(90deg,#22d3ee,#a78bfa);
  }
  .chat-messages{
    flex:1;padding:12px;overflow:auto;display:flex;flex-direction:column;gap:8px;
    font-size:14px;color:#e5e7eb;
  }
  .msg{max-width:80%;padding:9px 11px;border-radius:12px;line-height:1.3}
  .msg.bot{align-self:flex-start;background:#1f2937;border-top-left-radius:4px}
  .msg.user{align-self:flex-end;background:#22d3ee;color:#000;border-top-right-radius:4px}
  .chat-input{display:flex;gap:8px;border-top:1px solid rgba(34,211,238,.35);padding:10px;background:#0b1220}
  .chat-input input{
    flex:1;background:#0f172a;color:#e5e7eb;border:1px solid #243244;border-radius:10px;padding:10px;outline:none;
  }
  .chat-input button{
    background:#22d3ee;border:none;border-radius:10px;padding:10px 14px;font-weight:800;cursor:pointer;color:#000;
  }
  .chat-cta { padding: 10px; border-top: 1px solid rgba(34,211,238,.25); background:#0b1220; text-align:center; }
  .cta-btn { background:#a78bfa; color:#000; font-weight:800; border:none; border-radius:10px; padding:10px 12px; cursor:pointer; }

  /* Modal / overlay */
  .lead-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,.55); z-index: 70;
    backdrop-filter: blur(2px);
  }
  .lead-modal {
    position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);
    width: 92%; max-width: 560px; z-index: 80; color:#e5e7eb;
    background:#0f172a; border:1px solid rgba(34,211,238,.35); border-radius:16px;
    box-shadow:0 20px 60px rgba(0,0,0,.5), 0 0 40px rgba(168,85,247,.25);
    padding: 18px;
  }
  .lead-title { margin:0 0 12px; font-weight:800; text-align:center; background:linear-gradient(90deg,#22d3ee,#a78bfa); -webkit-background-clip:text; background-clip:text; color:transparent; }
  .lead-grid {
    display:grid; grid-template-columns:1fr 1fr; gap:12px;
  }
  .lead-grid label { display:flex; flex-direction:column; gap:6px; font-size:14px; }
  .lead-grid input, .lead-grid select, .lead-grid textarea {
    background:#0b1220; color:#e5e7eb; border:1px solid #243244; border-radius:10px; padding:10px; outline:none;
  }
  .lead-grid .col-span-2 { grid-column: span 2; }
  .lead-actions { display:flex; justify-content:flex-end; gap:10px; margin-top:12px; }
  .btn-cancel { background:#1f2937; color:#e5e7eb; border:none; padding:10px 12px; border-radius:10px; cursor:pointer; }
  .btn-send { background:#22d3ee; color:#000; border:none; padding:10px 14px; border-radius:10px; cursor:pointer; font-weight:800; }
  .lead-ok { margin-top:10px; color:#10b981; text-align:center; }
  .lead-error { margin-top:10px; color:#f87171; text-align:center; }
  .lead-error a { color:#22d3ee; text-decoration: underline; }

  /* Fallback suaves por si no tienes estas utilidades */
  .glass { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.08); }
  .gradient-animated { background-image: linear-gradient(90deg,#22d3ee,#a78bfa,#34d399); }
  .animate-gradient { animation: hue 12s linear infinite; }
  @keyframes hue { from{ filter:hue-rotate(0deg);} to{ filter:hue-rotate(360deg);} }
  .bg-noise { background-image: radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px); background-size: 3px 3px; }
</style>
