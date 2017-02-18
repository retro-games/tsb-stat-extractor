/**
 * Created by edgrams on 2/12/17.
 */

jest.unmock("../src/index");
jest.unmock("../src/save-states");

import detector from "../src/detector";
import {extract} from "../src/index";
import NesNestopiaOriginalExtractor from "../src/extractors/nes/nestopia/original-extractor";
import * as SaveStates from "../src/save-states";

let bytes;

describe("index", () => {
    describe("extract", () => {
        beforeEach(() => {
            bytes = [];
        });

        test("detect save state", () => {
            detector
                .mockReturnValueOnce(SaveStates.nesNestopiaSaveState);

            extract(bytes);

            expect(detector).toHaveBeenCalledWith(bytes);
        });

        test("extract nes nestopia original save state", () => {
            detector
                .mockReturnValueOnce(SaveStates.nesNestopiaSaveState);

            extract(bytes);

            expect(NesNestopiaOriginalExtractor).toHaveBeenCalledWith(SaveStates.nesNestopiaSaveState.TYPE, bytes);
        });

        test("throw for unknown save state", () => {
            expect(() => {
                extract(bytes);
            }).toThrowError("Unknown save state.");
        });
    });
});