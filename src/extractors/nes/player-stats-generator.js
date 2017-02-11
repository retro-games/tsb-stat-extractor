/**
 * Created by edgrams on 2/11/17.
 */

import QBStats from '../../definitions/players/qb-stats';

const YARD_MULTIPLIER = 256;
const YARD_MULTIPLIER_NEGATIVE = 255;
const YARD_MULTIPLIER_UPPER_BOUNDS = 10;

function getYards(yards, multiplier) {
    var negativeMultiplier, negativeYards, totalYards;

    if (multiplier < YARD_MULTIPLIER_UPPER_BOUNDS) {
        totalYards = yards + (multiplier * YARD_MULTIPLIER);
    } else {
        negativeYards = Math.abs(YARD_MULTIPLIER - yards) * -1;
        negativeMultiplier = Math.abs((YARD_MULTIPLIER_NEGATIVE - multiplier) * YARD_MULTIPLIER) * -1;
        totalYards = negativeYards + negativeMultiplier;
    }

    return totalYards;
}

function getQBStats(bytes, offset) {
    let passAtts, passComps, passInts, passTDs, passYards, rushAtts, rushTDs, rushYards;

    passAtts = bytes[offset++];
    passComps = bytes[offset++];
    passTDs = bytes[offset++];
    passInts = bytes[offset++];
    passYards = getYards(bytes[offset++], bytes[offset++]);
    rushAtts = bytes[offset++];
    rushYards = getYards(bytes[offset++], bytes[offset++]);
    rushTDs = bytes[offset];

    return new QBStats(passAtts, passComps, passInts, passTDs, passYards, rushAtts, rushTDs, rushYards);
}

export {getQBStats, getYards};