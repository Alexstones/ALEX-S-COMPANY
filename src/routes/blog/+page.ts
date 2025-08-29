import type { PageLoad } from './$types';

export const load = (async () => {
  const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });
  const posts = Object.entries(modules).map(([path, mod]) => {
    const m = mod as unknown as { metadata: any };
    const slug = path.split('/').pop()!.replace('.md','');
    return { slug, ...m.metadata };
  }).sort((a,b) => (b.date ?? '').localeCompare(a.date ?? ''));
  return { posts };
}) satisfies PageLoad;
