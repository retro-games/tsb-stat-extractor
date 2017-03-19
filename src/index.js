
import detector from "./detector";
import * as SaveStates from "./save-states";
import NesNestopiaOriginalExtract from "./extractors/nes/nestopia/original-extractor";

function extract(bytes) {
    let gameStats, saveState;

    saveState = detector(bytes);

    if (saveState === SaveStates.nesNestopiaSaveState) {
        gameStats = NesNestopiaOriginalExtract(saveState.TYPE, bytes);
    } else {
        throw "Unknown save state.";
    }

    return gameStats;
}

function extractFromArrayBuffer(arrayBuffer) {
    const bytes = new Uint8Array(arrayBuffer, 0, arrayBuffer.byteLength);
    return extract(bytes);
}

export {extract, extractFromArrayBuffer};