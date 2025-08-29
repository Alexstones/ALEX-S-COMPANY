import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });
  const entry = Object.entries(modules).find(([path]) => path.endsWith(`${params.slug}.md`));
  if (!entry) return { status: 404 };
  const mod = entry[1] as unknown as { default: any; metadata: any };
  return { Content: mod.default, meta: mod.metadata };
}) satisfies PageLoad;
