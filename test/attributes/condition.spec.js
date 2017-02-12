/**
 * Created by edgrams on 2/12/17.
 */

jest.unmock("../../src/attributes/condition");

import * as Condition from "../../src/attributes/condition";

let result;

describe("condition", () => {
    describe("getValue", () => {
        test("bad", () => {
            result = Condition.getValue(Condition.conditionsBinary.BAD);

            expect(result).toBe(Condition.conditions.BAD);
        });

        test("average", () => {
            result = Condition.getValue(Condition.conditionsBinary.AVERAGE);

            expect(result).toBe(Condition.conditions.AVERAGE);
        });

        test("good", () => {
            result = Condition.getValue(Condition.conditionsBinary.GOOD);

            expect(result).toBe(Condition.conditions.GOOD);
        });

        test("excellent", () => {
            result = Condition.getValue(Condition.conditionsBinary.EXCELLENT);

            expect(result).toBe(Condition.conditions.EXCELLENT);
        });

        test("default", () => {
            result = Condition.getValue("a");

            expect(result).toBe(Condition.conditions.NA);
        });
    });
});