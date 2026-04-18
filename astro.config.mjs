// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Per-machine overrides (gitignored). Use astro.config.local.mjs to set
// e.g. vite.server.allowedHosts for an SSH hostname.
const local = await import('./astro.config.local.mjs').catch(() => ({ default: {} }));

export default defineConfig({
	site: 'https://backloghq.io',
	vite: local.default.vite,
	integrations: [
		starlight({
			title: 'BacklogHQ',
			description: 'Open-source tools for AI agents.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/backloghq' }],
			customCss: ['./src/styles/custom.css'],
			components: {
				Footer: './src/components/Footer.astro',
				SiteTitle: './src/components/SiteTitle.astro',
			},
			credits: true,
			lastUpdated: true,
			sidebar: [
				{
					label: 'AgentDB',
					items: [
						{ label: 'Getting Started', slug: 'agentdb/getting-started' },
						{
							label: 'API',
							items: [
								{ label: 'Collection', slug: 'agentdb/api/collection' },
								{ label: 'Schemas', slug: 'agentdb/api/schemas' },
								{ label: 'Filters', slug: 'agentdb/api/filters' },
								{ label: 'Indexes', slug: 'agentdb/api/indexes' },
								{ label: 'Vector Search', slug: 'agentdb/api/vector-search' },
							],
						},
						{
							label: 'MCP',
							items: [
								{ label: 'Tools Reference', slug: 'agentdb/mcp/tools' },
								{ label: 'Authentication', slug: 'agentdb/mcp/auth' },
								{ label: 'Real-time Notifications', slug: 'agentdb/mcp/subscribe' },
							],
						},
						{
							label: 'Guides',
							items: [
								{ label: 'Deployment', slug: 'agentdb/guides/deployment' },
								{ label: 'Examples', slug: 'agentdb/guides/examples' },
							],
						},
					],
				},
				{
					label: 'Backlog',
					items: [
						{ label: 'Getting Started', slug: 'backlog/getting-started' },
						{
							label: 'Skills',
							items: [
								{ label: 'Overview', slug: 'backlog/skills/overview' },
								{ label: '/backlog:tasks', slug: 'backlog/skills/tasks' },
								{ label: '/backlog:plan', slug: 'backlog/skills/plan' },
								{ label: '/backlog:standup', slug: 'backlog/skills/standup' },
								{ label: '/backlog:refine', slug: 'backlog/skills/refine' },
								{ label: '/backlog:spec', slug: 'backlog/skills/spec' },
								{ label: '/backlog:implement', slug: 'backlog/skills/implement' },
								{ label: '/backlog:handoff', slug: 'backlog/skills/handoff' },
							],
						},
						{ label: 'Tools Reference', slug: 'backlog/tools' },
						{ label: 'Filter Syntax', slug: 'backlog/filters' },
					],
				},
			],
		}),
	],
});
