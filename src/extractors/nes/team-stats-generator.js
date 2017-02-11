/**
 * Created by edgrams on 2/5/17.
 */

import {getHexValueAsInt} from "../../utility";
import TeamStats from "../../definitions/team-stats";

export default function (bytes, locations) {
    let offset, teamId, firstDowns, firstQtr, secondQtr, thirdQtr, fourthQtr, finalScore;
    

    offset = locations.FIRST_DOWNS;
    firstDowns = bytes[offset];

    offset = locations.SCORES;
    firstQtr = getHexValueAsInt(bytes[offset++]);
    secondQtr = getHexValueAsInt(bytes[offset++]);
    thirdQtr = getHexValueAsInt(bytes[offset++]);
    fourthQtr = getHexValueAsInt(bytes[offset++]);
    finalScore = getHexValueAsInt(bytes[offset]);

    offset = locations.TEAM_ID;
    teamId = bytes[offset];

    return new TeamStats(teamId, firstDowns, firstQtr, secondQtr, thirdQtr, fourthQtr, finalScore);
}