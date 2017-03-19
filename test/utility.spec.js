
import {getHexValueAsInt} from "../src/utility";

let result;

describe("utility", () => {
    describe("getHexValueAsInt", () => {
        test("hex value as int", () => {
            let byte = 18; // "12" in hex
            result = getHexValueAsInt(byte);
            expect(result).toEqual(12);
        });
    });
});