/**
 * Created by edgrams on 1/29/17.
 */

jest.unmock("../src/detector");
jest.unmock("../src/save-states");

import detect from "../src/detector";
import {nesNestopiaSaveState, unknownSaveState} from "../src/save-states";

let bytes, saveState;

describe("detector", () => {
    describe("detect", () => {
        test("save state type if type is NES Nestopia", () => {
            bytes = new Array(nesNestopiaSaveState.LENGTH);
            saveState = detect(bytes);
            expect(saveState).toBe(nesNestopiaSaveState);
        });

        test("save state type if type is not found", () => {
            bytes = [];
            saveState = detect(bytes);
            expect(saveState).toBe(unknownSaveState);
        });
    });
});