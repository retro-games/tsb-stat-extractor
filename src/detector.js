/**
 * Created by edgrams on 1/29/17.
 */

import * as constants from './save-states';

function detect(bytes) {
    var saveState = constants.UNKNOWN;

    if (bytes.length === constants.NES_NESTOPIA.LENGTH) {
        saveState = constants.NES_NESTOPIA;
    }

    return saveState;
}

export {detect};