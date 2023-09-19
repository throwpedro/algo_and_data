import {test, expect } from 'bun:test';
import { bubbleSort } from './bubbleSort';
import { generateArray } from '../../generateArray';

test('is sorted', () => {
    const nums = generateArray(20);
    expect(bubbleSort(nums)).toEqual([...nums].sort((a, b) => a - b));
})