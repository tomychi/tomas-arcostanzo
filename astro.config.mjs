import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        sitemap({
            hostname: 'https://tomychi.github.io',
            pages: [
                { url: '/', changefreq: 'daily', priority: 1 },
                { url: '/about', changefreq: 'daily', priority: 1 },
                { url: '/projects', changefreq: 'daily', priority: 1 },
                { url: '/contact', changefreq: 'daily', priority: 1 },
            ],
            i18n: {
                defaultLocale: 'en',
                locales: ['en', 'es'],
            },

            serialize: ({ paths }) => {
                return paths.map((path) => {
                    return {
                        url: path,
                        changefreq: 'daily',
                        priority: 1,
                    };
                });
            },

            exclude: ['/404', '/500'],

            trailingSlash: true,
        }),
    ],
    site: 'https://tomychi.github.io',
    base: '/tomas-arcostanzo',
});
