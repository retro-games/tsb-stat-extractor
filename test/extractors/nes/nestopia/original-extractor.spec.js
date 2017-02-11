/**
 * Created by edgrams on 2/11/17.
 */

jest.unmock("../../../../src/definitions/game-stats");
jest.unmock("../../../../src/extractors/nes/nestopia/original-extractor");

import GameStats from "../../../../src/definitions/game-stats";
import NestopiaOriginalExtractor from "../../../../src/extractors/nes/nestopia/original-extractor";
import * as StatLocations from "../../../../src/extractors/nes/nestopia/stat-locations";
import getTeamStats from "../../../../src/extractors/nes/team-stats-generator";

let awayTeamStats, bytes, homeTeamStats, saveStateTypes, result;

describe("original-extractor", () => {
    describe("extract", () => {
        beforeEach(() => {
            bytes = new Uint8Array([]);
            saveStateTypes = "nestopia";
        });

        test("awayTeam", () => {
            NestopiaOriginalExtractor.extract(saveStateTypes, bytes);

            expect(getTeamStats).toHaveBeenCalledWith(bytes, StatLocations.Away);
        });

        test("homeTeam", () => {
            NestopiaOriginalExtractor.extract(saveStateTypes, bytes);

            expect(getTeamStats).toHaveBeenCalledWith(bytes, StatLocations.Home);
        });

        test("return game stats", () => {
            awayTeamStats = {};
            homeTeamStats = {};

            getTeamStats
                .mockReturnValueOnce(awayTeamStats)
                .mockReturnValueOnce(homeTeamStats);

            result = NestopiaOriginalExtractor.extract(saveStateTypes, bytes);

            expect(result).toEqual(new GameStats(awayTeamStats, undefined, homeTeamStats, undefined, saveStateTypes));
        });
    });
});