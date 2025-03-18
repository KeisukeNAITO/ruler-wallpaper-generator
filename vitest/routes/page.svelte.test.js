import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from '../../src/routes/+page.svelte';

describe('/+page.svelte', () => {
	test('タイトル"Wallpaper Generator"を含んだh1タグが存在すること。', () => {
		render(Page);
		const h1 = screen.getByRole('heading', { level: 1 });

		expect(h1).toBeInTheDocument();
		expect(h1).toHaveTextContent('Wallpaper Generator');
	});
});
