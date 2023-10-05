import { describe, test, expect } from 'bun:test';
import { binarySearch, linearSearch } from './search';

describe('test', () => {
    const arr = [{ id: 1, name: "Sam" },
    { id: 3, name: "Sarah" },
    { id: 5, name: "John" },
    { id: 6, name: "Burke" },
    { id: 10, name: "Simona" },
    { id: 12, name: "Asim" },
    { id: 13, name: "Niki" },
    { id: 15, name: "Aysegul" },
    { id: 17, name: "Kyle" },
    { id: 18, name: "Jem" },
    { id: 19, name: "Marc" },
    { id: 21, name: "Chris" }]
    test('linear search', () => {
        expect(linearSearch(arr, { id: 19, name: 'Marc' })).toEqual({ id: 19, name: 'Marc' });
    });

    test('binary search', () => {
        expect(binarySearch(arr, { id: 19, name: 'Marc' })).toEqual({ id: 19, name: 'Marc' });
    });
});
