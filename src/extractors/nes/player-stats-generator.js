/**
 * Created by edgrams on 2/11/17.
 */

import QBStats from "../../definitions/players/qb-stats";
import OffPlayerStats from "../../definitions/players/off-player-stats";
import DefPlayerStats from "../../definitions/players/def-player-stats";
import KickStats from "../../definitions/players/kick-stats";
import PuntStats from "../../definitions/players/punt-stats";

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

function getOffPlayerStats(bytes, offset) {
    let krAtts, krTDs, krYards, prAtts, prTDs, prYards, recs, recTDs, recYards, rushAtts, rushTDs, rushYards;

    recs = bytes[offset++];
    recYards = getYards(bytes[offset++], bytes[offset++]);
    recTDs = bytes[offset++];
    krAtts = bytes[offset++];
    krYards = getYards(bytes[offset++], bytes[offset++]);
    krTDs = bytes[offset++];
    prAtts = bytes[offset++];
    prYards = getYards(bytes[offset++], bytes[offset++]);
    prTDs = bytes[offset++];
    rushAtts = bytes[offset++];
    rushYards = getYards(bytes[offset++], bytes[offset++]);
    rushTDs = bytes[offset];

    return new OffPlayerStats(krAtts, krTDs, krYards, prAtts, prTDs, prYards,
        recs, recTDs, recYards, rushAtts, rushTDs, rushYards);
}

function getDefPlayerStats(bytes, offset) {
    let sacks, ints, intYards, intTDs;

    sacks = bytes[offset++];
    ints = bytes[offset++];
    intYards = getYards(bytes[offset++], bytes[offset++]);
    intTDs = bytes[offset];

    return new DefPlayerStats(ints, intTDs, intYards, sacks);
}

function getKickStats(bytes, offset) {
    let epAtts, epMade, fgAtts, fgMade;

    fgAtts = bytes[offset++];
    fgMade = bytes[offset++];
    epAtts = bytes[offset++];
    epMade = bytes[offset];

    return new KickStats(epAtts, epMade, fgAtts, fgMade);
}

function getPuntStats(bytes, offset) {
    let punts, puntYards;

    punts = bytes[offset++];
    puntYards = getYards(bytes[offset++], bytes[offset]);

    return new PuntStats(punts, puntYards);
}

export {getQBStats, getOffPlayerStats, getDefPlayerStats, getKickStats, getPuntStats, getYards};