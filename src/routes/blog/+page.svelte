<script lang="ts">
  export let data: { posts: Array<{slug:string; title:string; excerpt:string; date:string; tags?:string[]; image?:string}> };
</script>

<svelte:head>
  <title>Blog & Guías | ALEX’S TECHNOLOGY</title>
  <meta name="description" content="Guías prácticas, estrategias y checklists para que tu web venda más." />
</svelte:head>

<section class="max-w-7xl mx-auto px-6 py-16">
  <h1 class="text-4xl md:text-5xl font-extrabold font-orbitron mb-6">Blog & Guías</h1>
  <p class="text-white/80 font-space-mono mb-8">Consejos accionables para atraer clientes y convertir más.</p>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each data.posts as p}
      <a href={`/blog/${p.slug}`} class="glass rounded-2xl p-5 hover:shadow-neon-cyan-hover transition-all block">
        {#if p.image}<img src={p.image} alt={p.title} class="w-full h-40 object-cover rounded-xl mb-3 opacity-90" />{/if}
        <h3 class="text-xl font-orbitron">{p.title}</h3>
        <p class="text-white/70 text-sm mt-1 font-space-mono">{p.excerpt}</p>
        <div class="text-xs text-white/50 mt-2 font-space-mono">{p.date}</div>
        {#if p.tags?.length}
          <div class="mt-2 flex gap-2 flex-wrap">
            {#each p.tags as t}<span class="px-2 py-0.5 text-xs border border-white/15 rounded">{t}</span>{/each}
          </div>
        {/if}
      </a>
    {/each}
  </div>
</section>
