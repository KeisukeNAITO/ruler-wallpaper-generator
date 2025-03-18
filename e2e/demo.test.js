import { expect, test } from '@playwright/test';

test('"/"へアクセスしたときにヘッダータイトルが「Ruler Wallpaper Generator」であること。', async ({
	page
}) => {
	await page.goto('/');
	await expect(await page.title()).toBe('Ruler Wallpaper Generator');
});
