
import {nesNestopiaSaveState, unknownSaveState} from "./save-states";

export default function (bytes) {
    let saveState = unknownSaveState;

    if (bytes.length === nesNestopiaSaveState.LENGTH) {
        saveState = nesNestopiaSaveState;
    }

    return saveState;
}