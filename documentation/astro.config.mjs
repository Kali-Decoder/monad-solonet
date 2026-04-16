// @ts-check
import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.monad.xyz/',
	integrations: [
		mermaid({
			autoTheme: true,
			enableLog: false,
			mermaidConfig: {
				theme: 'dark',
				flowchart: { curve: 'basis', nodeSpacing: 32, rankSpacing: 48 },
				themeVariables: {
					fontFamily: 'DM Sans, Inter, ui-sans-serif, system-ui, sans-serif',
					fontSize: '13px',
					primaryColor: '#18181b',
					primaryTextColor: '#e4e4e7',
					primaryBorderColor: '#3f3f46',
					lineColor: '#52525b',
					secondaryColor: '#27272a',
					tertiaryColor: '#1c1c1e',
				},
			},
		}),
		starlight({
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
			},
			title: 'Solonet Docs',
			description: 'Monad Solonet is a fully containerized local execution environment for running complete Monad blockchain networks on your machine.',
			logo: {
				src: './src/assets/solonet.png',
				alt: 'Solonet',
				replacesTitle: true,
			},
			titleDelimiter: '|',
			defaultLocale: 'root',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/monad-crypto/monad-solonet' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/Oxjohnm' },
				{ icon: 'external', label: 'monad', href: 'https://docs.monad.xyz/' },
			],
			customCss: ['./src/styles/calimero.css'],
			head: [
				// Fonts
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{ tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600&display=swap' } },
				// Open Graph
				{ tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'Solonet Docs' } },
				{ tag: 'meta', attrs: { property: 'og:title', content: 'Solonet Docs' } },
				{ tag: 'meta', attrs: { property: 'og:description', content: 'Official documentation for the Solonet  — core concepts, Installation ' } },
				{ tag: 'meta', attrs: { property: 'og:url', content: 'https://github.com/monad-crypto/monad-solonet' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://github.com/monad-crypto/monad-solonet' } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { property: 'og:image:alt', content: 'Solonet Docs' } },
				// Twitter / X card
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
				{ tag: 'meta', attrs: { name: 'twitter:site', content: '@Oxjohnm' } },
				{ tag: 'meta', attrs: { name: 'twitter:title', content: 'Solonet Docs' } },
				{ tag: 'meta', attrs: { name: 'twitter:description', content: 'Official documentation for the Solonet network — core concepts & Installation Guide' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: 'https://github.com/monad-crypto/monad-solonet' } },
			],
			sidebar: [
				{
				  label: 'Start Here',
				  collapsed: false,
				  items: [
					{ label: 'Home', slug: '' },
					{ label: 'Introduction', slug: 'intro' },
					{ label: 'Getting Started', slug: 'getting-started' },
				  ],
				},
			  ]
		}),
	],
});
