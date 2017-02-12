/**
 * Created by edgrams on 2/11/17.
 */

import detector from "./detector";
import * as SaveStates from "./save-states";
import NesNestopiaOriginalExtract from "./extractors/nes/nestopia/original-extractor";

export default function (bytes) {
    let gameStats, saveState;

    saveState = detector(bytes);

    if (saveState === SaveStates.nesNestopiaSaveState) {
        gameStats = NesNestopiaOriginalExtract(saveState.TYPE, bytes);
    } else {
        throw "Unknown save state.";
    }

    return gameStats;
}