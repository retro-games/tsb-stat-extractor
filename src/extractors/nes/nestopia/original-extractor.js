/**
 * Created by edgrams on 2/5/17.
 */

import {getPlayerStatsForTeam} from "../player-stats-generator";
import getTeamStats from "../team-stats-generator";
import GameStats from "../../../definitions/game-stats";
import * as StatLocations from "./stat-locations";

export default function extract(saveStateType, bytes) {
    let awayPlayerStats, awayTeamStats, homePlayerStats, homeTeamStats;

    awayTeamStats = getTeamStats(bytes, StatLocations.Away);
    homeTeamStats = getTeamStats(bytes, StatLocations.Home);

    awayPlayerStats = getPlayerStatsForTeam(bytes, StatLocations.Away);
    homePlayerStats = getPlayerStatsForTeam(bytes, StatLocations.Home);

    return new GameStats(awayPlayerStats, awayTeamStats, homePlayerStats, homeTeamStats, saveStateType);
}