/**
 * Created by edgrams on 1/29/17.
 */

import {getHexValueAsInt} from '../src/utility';

let result;

describe('utility', function () {
    describe('getHexValueAsInt', function () {
        test('should return hex value as int', () => {
            let byte = 18; // '12' in hex
            result = getHexValueAsInt(byte);
            expect(result).toEqual(12);
        });
    });
});