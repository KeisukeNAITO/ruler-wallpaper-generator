import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		workspace: [
			{
				extends: './vite.config.js',
				plugins: [svelteTesting()],

				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['vitest/**/*.svelte.test.js'],
					setupFiles: ['./vitest-setup-client.js']
				}
			},
			{
				extends: './vite.config.js',

				test: {
					name: 'server',
					environment: 'node',
					include: ['vitest/**/*.spec.js']
				}
			}
		]
	}
});
