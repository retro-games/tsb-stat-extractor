/**
 * Created by edgrams on 2/5/17.
 */

import {getHexValueAsInt} from '../../utility';
import {TeamStats} from '../../definitions/team-stats';

export default function (bytes, homeLocations, awayLocations, isHome) {
    let offset, locations, teamId, firstDowns, firstQuarter, secondQuarter, thirdQuarter, fourthQuarter, finalScore;

    if (isHome) {
        locations = homeLocations;
    } else {
        locations = awayLocations;
    }

    offset = locations.FIRST_DOWNS;
    firstDowns = bytes[offset];

    offset = locations.SCORES;
    firstQuarter = getHexValueAsInt(bytes[offset++]);
    secondQuarter = getHexValueAsInt(bytes[offset++]);
    thirdQuarter = getHexValueAsInt(bytes[offset++]);
    fourthQuarter = getHexValueAsInt(bytes[offset++]);
    finalScore = getHexValueAsInt(bytes[offset]);

    offset = locations.TEAM_ID;
    teamId = bytes[offset];

    return new TeamStats(teamId, firstDowns, firstQuarter, secondQuarter, thirdQuarter, fourthQuarter, finalScore);
}