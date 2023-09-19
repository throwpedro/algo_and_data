import { test, expect } from 'bun:test';
import { nestedAdd } from './nestedAdd';

test('sums numbers in nested arrays', () => {
    expect(nestedAdd([1, 2, 3, [4, 5, [6, 7, 8]]])).toEqual(36);
});