
import * as Health from "../../src/attributes/health";

let result;

describe("health", () => {
    describe("getValue", () => {
        test("healthy", () => {
            result = Health.getValue(Health.healthBinary.HEALTHY);

            expect(result).toBe(Health.health.HEALTHY);
        });

        test("probable", () => {
            result = Health.getValue(Health.healthBinary.PROBABLE);

            expect(result).toBe(Health.health.PROBABLE);
        });

        test("questionable", () => {
            result = Health.getValue(Health.healthBinary.QUESTIONABLE);

            expect(result).toBe(Health.health.QUESTIONABLE);
        });

        test("doubtful", () => {
            result = Health.getValue(Health.healthBinary.DOUBTFUL);

            expect(result).toBe(Health.health.DOUBTFUL);
        });

        test("default", () => {
            result = Health.getValue("a");

            expect(result).toBe(Health.health.NA);
        });
    });
});