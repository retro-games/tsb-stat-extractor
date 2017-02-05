/**
 * Created by edgrams on 1/29/17.
 */

import {nesNestopiaSaveState, unknownSaveState} from './save-states';

function detect(bytes) {
    let saveState = unknownSaveState;

    if (bytes.length === nesNestopiaSaveState.LENGTH) {
        saveState = nesNestopiaSaveState;
    }

    return saveState;
}

export {detect};