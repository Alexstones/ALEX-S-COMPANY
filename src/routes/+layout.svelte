<script>
	import '../app.css';
  </script>
  
  <svelte:head>
	<!-- Fuentes -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Orbitron:wght@500;700&display=swap" rel="stylesheet">
	<title>ALEX’S TECHNOLOGY — Desarrollo Web</title>
	<meta name="description" content="Desarrollo web profesional: landing pages, corporativos, e-commerce, mantenimiento y SEO.">
  </svelte:head>
  
  <!-- Fondo tech: gradiente + puntos -->
  <div class="min-h-screen text-white relative">
	<div class="absolute inset-0 gradient-animated animate-gradient opacity-30"></div>
	<div class="absolute inset-0 bg-grid-dots [background-size:24px_24px]"></div>
	<div class="relative">
	  <slot />
	</div>
  </div>
  
  