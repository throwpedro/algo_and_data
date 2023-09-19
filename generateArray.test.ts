import { test, expect } from 'bun:test';
import { generateArray } from './generateArray';

test('retuns array of integers', () => {
    const arr = generateArray(20);
    expect(arr.length).toEqual(20);
    expect(typeof arr[0]).toBe("number");
});