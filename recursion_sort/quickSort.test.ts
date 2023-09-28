import { test, expect } from 'bun:test';
import { quickSort } from './quickSort'
import { generateArray } from '../generateArray';

test('quickSort', () => {
    const arr = generateArray(20);
    expect(quickSort(arr)).toEqual(arr.sort((a, b) => a - b));
});