/**
 * Created by edgrams on 2/11/17.
 */

jest.unmock("../../../../src/definitions/game-stats");
jest.unmock("../../../../src/extractors/nes/nestopia/original-extractor");

import GameStats from "../../../../src/definitions/game-stats";
import extract from "../../../../src/extractors/nes/nestopia/original-extractor";
import * as StatLocations from "../../../../src/extractors/nes/nestopia/stat-locations";
import {getPlayerStatsForTeam} from "../../../../src/extractors/nes/player-stats-generator";
import getTeamStats from "../../../../src/extractors/nes/team-stats-generator";

let awayPlayerStats, awayTeamStats, bytes, homePlayerStats, homeTeamStats, saveStateTypes, result;

describe("original-extractor", () => {
    describe("extract", () => {
        beforeEach(() => {
            bytes = new Uint8Array([]);
            saveStateTypes = "nestopia";
        });

        test("away team stats", () => {
            extract(saveStateTypes, bytes);

            expect(getTeamStats).toHaveBeenCalledWith(bytes, StatLocations.Away);
        });

        test("home team stats", () => {
            extract(saveStateTypes, bytes);

            expect(getTeamStats).toHaveBeenCalledWith(bytes, StatLocations.Home);
        });

        test("away player stats", () => {
            extract(saveStateTypes, bytes);

            expect(getPlayerStatsForTeam).toHaveBeenCalledWith(bytes, StatLocations.Away);
        });

        test("home player stats", () => {
            extract(saveStateTypes, bytes);

            expect(getPlayerStatsForTeam).toHaveBeenCalledWith(bytes, StatLocations.Home);
        });

        test("return game stats", () => {
            awayPlayerStats = {};
            awayTeamStats = {};
            homePlayerStats = {};
            homeTeamStats = {};

            getTeamStats
                .mockReturnValueOnce(awayTeamStats)
                .mockReturnValueOnce(homeTeamStats);

            getPlayerStatsForTeam
                .mockReturnValueOnce(awayTeamStats)
                .mockReturnValueOnce(homeTeamStats);

            result = extract(saveStateTypes, bytes);

            expect(result).toEqual(new GameStats(awayPlayerStats, awayTeamStats, homePlayerStats,
                homeTeamStats, saveStateTypes));
        });
    });
});