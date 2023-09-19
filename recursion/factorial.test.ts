import { test, expect } from "bun:test";
import { factorial } from "./factorial";

test("factorials", () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(10)).toEqual(3628800);
});