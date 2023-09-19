import {test, expect } from 'bun:test';
import { insertionSort } from './insertionSort';
import { generateArray } from '../../generateArray';

test('is sorted', () => {
    const nums = generateArray(20);
    expect(insertionSort(nums)).toEqual([...nums].sort((a, b) => a - b));
});
