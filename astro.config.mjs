import { defineConfig } from 'astro/config';

// Static site. Clean URLs (directory format) + redirects from the old .html paths.
export default defineConfig({
  site: 'https://heliskitravel.vercel.app',
  build: { format: 'directory' },
  redirects: {
    '/home.html': '/',
    '/about.html': '/about',
    '/iceland.html': '/iceland',
    '/packages.html': '/packages',
    '/classic-heliskiing.html': '/classic-heliskiing',
    '/heli-assisted-touring.html': '/heli-assisted-touring',
    '/private-heliskiing.html': '/private-heliskiing',
    '/siglo-hotel.html': '/siglo-hotel',
    '/travel-here.html': '/travel-here',
  },
});
