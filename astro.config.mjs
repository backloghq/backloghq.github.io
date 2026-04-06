// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://backloghq.io',
	integrations: [
		starlight({
			title: 'backlog',
			description: 'Persistent task management for Claude Code and agent teams.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/backloghq/backlog' }],
			customCss: ['./src/styles/custom.css'],
			credits: true,
			lastUpdated: true,
			sidebar: [
				{ label: 'Getting Started', slug: 'getting-started' },
				{
					label: 'Skills',
					items: [
						{ label: 'Overview', slug: 'skills/overview' },
						{ label: '/backlog:tasks', slug: 'skills/tasks' },
						{ label: '/backlog:plan', slug: 'skills/plan' },
						{ label: '/backlog:standup', slug: 'skills/standup' },
						{ label: '/backlog:refine', slug: 'skills/refine' },
						{ label: '/backlog:spec', slug: 'skills/spec' },
						{ label: '/backlog:implement', slug: 'skills/implement' },
						{ label: '/backlog:handoff', slug: 'skills/handoff' },
					],
				},
				{ label: 'Tools Reference', slug: 'tools' },
				{ label: 'Filter Syntax', slug: 'filters' },
			],
		}),
	],
});
