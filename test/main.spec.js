/**
 * Created by edgrams on 1/27/17.
 */

import {justATest} from '../src/main';

test('print test statement', () => {
   const result = justATest();
   expect(result).toEqual('1212 this is just a test.');
});