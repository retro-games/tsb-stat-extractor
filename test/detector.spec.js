/**
 * Created by edgrams on 1/29/17.
 */

import detect from "../src/detector";
import {nesNestopiaSaveState, unknownSaveState} from "../src/save-states";

let bytes, saveState;

describe("detector", function () {
    describe("detect", function () {
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