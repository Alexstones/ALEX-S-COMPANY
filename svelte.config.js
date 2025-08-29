import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Permitimos .svelte y .md como componentes/páginas
  extensions: ['.svelte', '.md'],

  // Preprocesadores: Vite + mdsvex (para Markdown)
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      // Puedes añadir plugins si quieres:
      // remarkPlugins: [],
      // rehypePlugins: []
    })
  ],

  kit: {
    adapter: adapter()
  }
};

export default config;
