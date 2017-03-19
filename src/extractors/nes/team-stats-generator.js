
import {getHexValueAsInt} from "../../utility";
import TeamStats from "../../definitions/team-stats";

export default function (bytes, statLocations) {
    let offset, teamId, firstDowns, firstQtr, secondQtr, thirdQtr, fourthQtr, finalScore;
    

    offset = statLocations.FIRST_DOWNS;
    firstDowns = bytes[offset];

    offset = statLocations.SCORES;
    firstQtr = getHexValueAsInt(bytes[offset++]);
    secondQtr = getHexValueAsInt(bytes[offset++]);
    thirdQtr = getHexValueAsInt(bytes[offset++]);
    fourthQtr = getHexValueAsInt(bytes[offset++]);
    finalScore = getHexValueAsInt(bytes[offset]);

    offset = statLocations.TEAM_ID;
    teamId = bytes[offset];

    return new TeamStats(teamId, firstDowns, firstQtr, secondQtr, thirdQtr, fourthQtr, finalScore);
}