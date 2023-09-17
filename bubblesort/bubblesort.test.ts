import { test, expect } from 'bun:test';

import { bubblesort } from './bubblesort';


test('bubbleSort', () => {
    expect(bubblesort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});