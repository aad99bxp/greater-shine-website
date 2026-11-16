import { mkdir, readFile, writeFile, cp } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = resolve(root, 'dist');
await mkdir(dist, { recursive: true });
for (const file of ['index.html', 'app.js', 'styles.css', 'config.js']) {
  await cp(resolve(root, file), resolve(dist, file));
}
await cp(resolve(root, 'public'), dist, { recursive: true, force: true });

const siteUrl = (process.env.SITE_URL || '').replace(/\/$/, '');
if (siteUrl) {
  const paths = [
    '/', '/about', '/courses', '/contact', '/privacy-policy', '/terms-and-conditions',
    '/courses/c-programming', '/courses/cpp-programming', '/courses/python-programming',
    '/courses/java-programming', '/courses/full-stack-development', '/courses/data-structures-algorithms',
    '/courses/artificial-intelligence', '/courses/machine-learning', '/courses/data-analytics',
    '/courses/ethical-hacking', '/courses/digital-marketing', '/courses/search-engine-optimization',
    '/courses/google-analytics', '/courses/google-ads', '/courses/social-media-marketing',
    '/courses/website-design', '/courses/website-development'
  ];
  const urls = paths.map(path => `<url><loc>${siteUrl}${path}</loc></url>`).join('');
  await writeFile(resolve(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`, 'utf8');
  await writeFile(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`, 'utf8');
  console.log(`Generated sitemap for ${siteUrl}`);
} else {
  await writeFile(resolve(dist, 'robots.txt'), 'User-agent: *\nAllow: /\n', 'utf8');
  console.log('Set SITE_URL to generate a production sitemap and canonical domain.');
}
console.log('Built static site in dist/.');
