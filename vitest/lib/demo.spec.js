import { describe, it, expect } from 'vitest';
import { demo } from '../../src/lib/demo';

describe('デモテスト', () => {
	it('hello worldを返すこと。', () => {
		expect(demo()).toBe('Hello world');
	});
});
