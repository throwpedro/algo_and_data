import { test, expect } from 'bun:test';

import { radixSort } from './radixSort';
import { generateArray } from '../../generateArray';

test('radixSort', () => {
    const arr = generateArray(20);
    expect(radixSort(arr)).toEqual(arr.sort((a, b) => a - b));
});