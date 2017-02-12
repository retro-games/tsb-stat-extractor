/**
 * Created by edgrams on 2/12/17.
 */

jest.unmock("../src/main");
jest.unmock("../src/save-states");

import detector from "../src/detector";
import main from "../src/main";
import NesNestopiaOriginalExtractor from "../src/extractors/nes/nestopia/original-extractor";
import * as SaveStates from "../src/save-states";

let bytes;

describe("main", () => {
    beforeEach(() => {
       bytes = [];
    });

    test("detect save state", () => {
        detector
            .mockReturnValueOnce(SaveStates.nesNestopiaSaveState);

        main(bytes);

        expect(detector).toHaveBeenCalledWith(bytes);
    });

    test("extract nes nestopia original save state", () => {
        detector
            .mockReturnValueOnce(SaveStates.nesNestopiaSaveState);

        main(bytes);

        expect(NesNestopiaOriginalExtractor).toHaveBeenCalledWith(SaveStates.nesNestopiaSaveState.TYPE, bytes);
    });

    test("throw for unknown save state", () => {
        expect(() => {
            main(bytes);
        }).toThrowError("Unknown save state.");
    });
});