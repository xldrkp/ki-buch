import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import { astroExpressiveCode } from '@astrojs/starlight/expressive-code';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Entwicklung von KI verstehen',
			defaultLocale: 'root',
			locales: {
				// English docs in `src/content/docs/en/`
				root: {
					label: 'Deutsch',
					lang: 'de-DE',
				},
			},
			social: {
				github: 'https://github.com/xldrkp/ki-buch',
			},
			sidebar: [
				{
					label: 'Einleitung',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Vorwort',
							slug: 'einleitung/vorwort',
						},
						{
							label: 'Entwicklungsprozesse von KI-Systemen',
							slug: 'einleitung/entwicklungsprozesse',
						},
						{
							label: 'KI verstehen mit quelloffener Software',
							slug: 'einleitung/floss',
						},
						{
							label: 'Verständnis von Offenheit',
							slug: 'einleitung/offenheit',
						},
						{
							label: 'Leitende Fragestellungen',
							slug: 'einleitung/fragestellungen',
						},
						{ label: 'Erprobte Software', slug: 'einleitung/software' },
					],
				},
				{
					label: 'Hintergrund',
					items: [
						{
							label: '1. Daten finden oder erheben',
							autogenerate: { directory: 'daten-nutzen' },
							collapsed: true,
						},
						{
							label: '2. Daten aufbereiten',
							autogenerate: { directory: 'reference' },
							collapsed: true,
						},
						{
							label: '3. Modelle trainieren',
							autogenerate: { directory: 'reference' },
							collapsed: true,
						},
						{
							label: '4. Modelle evaluieren',
							autogenerate: { directory: 'reference' },
							collapsed: true,
						},
						{
							label: '5. Anwendungen entwickeln',
							autogenerate: { directory: 'reference' },
							collapsed: true,
						},
					],
				},
				{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' },
					collapsed: true,
				},
			],
		}),
		astroExpressiveCode(),
		mdx(),
	],
});
