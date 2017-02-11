/**
 * Created by edgrams on 2/5/17.
 */

import getTeamStats from "../team-stats-generator";
import GameStats from "../../../definitions/game-stats";
import * as StatLocations from "./stat-locations";

export default class NestopiaOriginalExtractor {
    static extract(saveStateType, bytes) {
        let awayTeamStats, homeTeamStats;

        awayTeamStats = getTeamStats(bytes, StatLocations.Away);
        homeTeamStats = getTeamStats(bytes, StatLocations.Home);

        return new GameStats(awayTeamStats, undefined, homeTeamStats, undefined, saveStateType);
    }
}