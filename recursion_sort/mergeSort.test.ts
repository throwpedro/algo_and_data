import { test, expect } from 'bun:test';
import { mergeSort } from './mergeSort';
import { generateArray } from '../generateArray';

test('mergeSort', () => {
    const arr = generateArray(20);
    expect(mergeSort(arr)).toEqual(arr.sort((a, b) => a - b));
});