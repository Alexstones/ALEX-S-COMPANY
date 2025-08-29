<script lang="ts">
  export let data: { Content: any; meta: any };
</script>

<svelte:head>
  <title>{data.meta?.title} | ALEX’S TECHNOLOGY</title>
  <meta name="description" content={data.meta?.excerpt ?? 'Guía y recursos prácticos'} />
  {#if data.meta?.image}<meta property="og:image" content={data.meta.image} />{/if}
</svelte:head>

<section class="max-w-3xl mx-auto px-6 py-12">
  <h1 class="text-3xl md:text-4xl font-extrabold font-orbitron">{data.meta?.title}</h1>
  <div class="text-sm text-white/60 font-space-mono mt-1">{data.meta?.date}</div>
  {#if data.meta?.image}<img src={data.meta.image} alt="" class="w-full rounded-xl my-6 opacity-90" />{/if}

  <article class="prose prose-invert max-w-none">
    <svelte:component this={data.Content} />
  </article>
</section>

<style>
  /* Prosa básica (si no usas tailwind typography) */
  :global(.prose) h1,
  :global(.prose) h2,
  :global(.prose) h3 {
    margin-top: 1.25em;
  }

  :global(.prose) p,
  :global(.prose) ul,
  :global(.prose) ol {
    color: #e5e7eb;
    line-height: 1.7;
  }

  :global(.prose) a {
    color: #22d3ee;
    text-decoration: underline;
  }
</style>
