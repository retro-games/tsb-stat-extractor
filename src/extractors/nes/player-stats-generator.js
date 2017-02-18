/**
 * Created by edgrams on 2/11/17.
 */

import QBStats from "../../definitions/players/qb-stats";
import OffPlayerStats from "../../definitions/players/off-player-stats";
import DefPlayerStats from "../../definitions/players/def-player-stats";
import KickStats from "../../definitions/players/kick-stats";
import PuntStats from "../../definitions/players/punt-stats";
import * as Condition from "../../attributes/condition";
import * as Health from "../../attributes/health";

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

function getQBStats(bytes, offset, health, condition) {
    let passAtts, passComps, passInts, passTDs, passYards, rushAtts, rushTDs, rushYards;

    passAtts = bytes[offset++];
    passComps = bytes[offset++];
    passTDs = bytes[offset++];
    passInts = bytes[offset++];
    passYards = getYards(bytes[offset++], bytes[offset++]);
    rushAtts = bytes[offset++];
    rushYards = getYards(bytes[offset++], bytes[offset++]);
    rushTDs = bytes[offset];

    return new QBStats(passAtts, passComps, passInts, passTDs, passYards, rushAtts, rushTDs, rushYards,
        health, condition);
}

function getOffPlayerStats(bytes, offset, health, condition) {
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

    return new OffPlayerStats(krAtts, krTDs, krYards, prAtts, prTDs, prYards, recs, recTDs, recYards, rushAtts,
        rushTDs, rushYards, health, condition);
}

function getDefPlayerStats(bytes, offset, health, condition) {
    let sacks, ints, intYards, intTDs;

    sacks = bytes[offset++];
    ints = bytes[offset++];
    intYards = getYards(bytes[offset++], bytes[offset++]);
    intTDs = bytes[offset];

    return new DefPlayerStats(ints, intTDs, intYards, sacks, health, condition);
}

function getKickStats(bytes, offset, health, condition) {
    let epAtts, epMade, fgAtts, fgMade;

    fgAtts = bytes[offset++];
    fgMade = bytes[offset++];
    epAtts = bytes[offset++];
    epMade = bytes[offset];

    return new KickStats(epAtts, epMade, fgAtts, fgMade, health, condition);
}

function getPuntStats(bytes, offset, health, condition) {
    let punts, puntYards;

    punts = bytes[offset++];
    puntYards = getYards(bytes[offset++], bytes[offset]);

    return new PuntStats(punts, puntYards, health, condition);
}

function fillWithLeadingZeros(value, length) {
    let gapLength = length - value.length;

    if (gapLength > 0) {
        value = new Array(gapLength + 1).join("0") + value;
    }

    return value;
}

function getTeamHealthArray(bytes, offset) {
    let binaryHealth, i, j, health, playersHealth, teamHealth;

    playersHealth = "";
    for (i = 0; i < 3; i++) {
        binaryHealth = bytes[offset++].toString(2);
        playersHealth += fillWithLeadingZeros(binaryHealth, 8);
    }

    teamHealth = [];
    for (j = 0; j < 12; j++) {
        health = Health.getValue(playersHealth.substring(j * 2, (j * 2) + 2));
        teamHealth.push(health);
    }

    return teamHealth;
}

function getTeamConditionArray(bytes, offset) {
    let binaryCondition, i, j, condition, playersCondition, teamCondition;

    playersCondition = "";
    for (i = 0; i < 7; i++) {
        binaryCondition = bytes[offset++].toString(2);
        playersCondition += fillWithLeadingZeros(binaryCondition, 8);
    }

    teamCondition = [];
    for (j = 0; j < 25; j++) {
        condition = Condition.getValue(playersCondition.substring(j * 2, (j * 2) + 2));
        teamCondition.push(condition);
    }

    return teamCondition;
}

function getPlayerStatsForTeam(bytes, statLocations) {
    let i, offset, playerStats, teamConditions, teamHealth;

    teamHealth = getTeamHealthArray(bytes, statLocations.HEALTH);
    teamConditions = getTeamConditionArray(bytes, statLocations.CONDITIONS);

    playerStats = [];
    offset = statLocations.PLAYER_STATS;

    for (i = 0; i < 2; i++) {
        playerStats.push(getQBStats(bytes, offset, teamHealth[i], teamConditions[i]));
        offset += 10;
    }

    for (i = 0; i < 10; i++) {
        playerStats.push(getOffPlayerStats(bytes, offset, teamHealth[i + 2], teamConditions[i + 2]));
        offset += 16;
    }

    for (i = 0; i < 11; i++) {
        playerStats.push(getDefPlayerStats(bytes, offset, teamHealth[i + 12], teamConditions[i + 12]));
        offset += 5;
    }

    playerStats.push(getKickStats(bytes, offset, teamHealth[i + 23], teamConditions[i + 23]));
    offset += 4;

    playerStats.push(getPuntStats(bytes, offset, teamHealth[i + 24], teamConditions[i + 24]));

    return playerStats;
}

export {fillWithLeadingZeros, getTeamHealthArray, getTeamConditionArray, getQBStats, getOffPlayerStats, getDefPlayerStats,
    getKickStats, getPuntStats, getYards, getPlayerStatsForTeam};