/**
 * Created by edgrams on 1/29/17.
 */

import {detect} from '../src/detector'
import * as constants from '../src/save-states';

let bytes, saveState;

describe('detector', function () {
    describe('detect', function () {
        test('should return NES Nestopia save state type if said type', () => {
            bytes = new Array(constants.NES_NESTOPIA.LENGTH);
            saveState = detect(bytes);
            expect(saveState).toBe(constants.NES_NESTOPIA);
        });

        test('should return unknown save state type if type is not found', () => {
            bytes = [];
            saveState = detect(bytes);
            expect(saveState).toBe(constants.UNKNOWN);
        });
    });
});