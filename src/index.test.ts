import { describe, expect, test } from "@jest/globals"
import t from ".";

describe("genToken", () => {
    test("generates the same token length for a byte count", () => {
        const t1 = t.genToken();
        const t2 = t.genToken();
        expect(t1).not.toEqual(t2);
        expect(t1.length).toEqual(t2.length);
    });

    test("larger tokens generated with more bytes", () => {
        expect(t.genToken(10).length).toBeLessThan(t.genToken(11).length);
    })
});

describe("tokenLength", () => {
    test("expected length matches token length", () => {
        expect(t.genToken(10).length).toEqual(t.tokenLength(10));
        expect(t.genToken(20).length).toEqual(t.tokenLength(20));
        expect(t.genToken(40).length).toEqual(t.tokenLength(40));
    });
});