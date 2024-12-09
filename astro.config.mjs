import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import { astroExpressiveCode } from '@astrojs/starlight/expressive-code';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'KI verstehen',
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
					label: 'Daten finden oder erheben',
					autogenerate: { directory: 'daten-nutzen' },
				},
				{
					label: 'Daten aufbereiten',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Modelle trainieren',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Anwendungsentwicklung',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Modelle evaluieren',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
		astroExpressiveCode(),
		mdx(),
	],
});
