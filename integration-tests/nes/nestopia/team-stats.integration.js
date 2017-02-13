/**
 * Created by edgrams on 2/11/17.
 */

jest.unmock("../../../src/main");
jest.unmock("../../../src/detector");
jest.unmock("../../../src/save-states");
jest.unmock("../../../src/definitions/game-stats");
jest.unmock("../../../src/definitions/players/def-player-stats");
jest.unmock("../../../src/definitions/players/kick-stats");
jest.unmock("../../../src/definitions/players/off-player-stats");
jest.unmock("../../../src/definitions/players/punt-stats");
jest.unmock("../../../src/definitions/players/qb-stats");
jest.unmock("../../../src/definitions/team-stats");
jest.unmock("../../../src/extractors/nes/nestopia/original-extractor");
jest.unmock("../../../src/extractors/nes/nestopia/stat-locations");
jest.unmock("../../../src/extractors/nes/player-stats-generator");
jest.unmock("../../../src/extractors/nes/team-stats-generator");
jest.unmock("../../../src/utility");
jest.unmock("../../helpers/decode");

jest.unmock("../../fixtures/nes/game-one/state.json");
jest.unmock("../../fixtures/nes/game-two/state.json");
jest.unmock("../../fixtures/nes/game-one/team-stats.json");
jest.unmock("../../fixtures/nes/game-two/team-stats.json");

import extract from "../../../src/main";
import decode from "../../helpers/decode";

import saveStateGameOne from "../../fixtures/nes/game-one/state.json";
import saveStateGameTwo from "../../fixtures/nes/game-two/state.json";
import gameStatsGameOne from "../../fixtures/nes/game-one/team-stats.json";
import gameStatsGameTwo from "../../fixtures/nes/game-two/team-stats.json";

let decodedSaveState, encodedSaveState, gameStats, games, teamsResult;

games = [{
            saveState: saveStateGameOne,
            teamsStats: gameStatsGameOne
        },
        {
            saveState: saveStateGameTwo,
            teamsStats: gameStatsGameTwo
        }];

describe("generateTeamStats", () => {
    games.forEach((game) => {
        beforeAll(() => {
            encodedSaveState = game.saveState;
            decodedSaveState = decode(encodedSaveState.binary);
            gameStats = extract(decodedSaveState);
            teamsResult = game.teamsStats;
        });

        describe("first downs", function () {
            test("away team", () => {
                expect(gameStats.awayTeamStats.firstDowns).toEqual(teamsResult.away.firstDowns);
            });

            test("home team", () => {
                expect(gameStats.homeTeamStats.firstDowns).toEqual(teamsResult.home.firstDowns);
            });
        });

        describe("scores", function () {
            describe("first quarter", () => {
                test("away team", () => {
                    expect(gameStats.awayTeamStats.firstQuarter).toEqual(teamsResult.away.firstQuarter);
                });

                test("home team", () => {
                    expect(gameStats.homeTeamStats.firstQuarter).toEqual(teamsResult.home.firstQuarter);
                });
            });

            describe("second quarter", () => {
                test("away team", () => {
                    expect(gameStats.awayTeamStats.secondQuarter).toEqual(teamsResult.away.secondQuarter);
                });

                test("home team", () => {
                    expect(gameStats.homeTeamStats.secondQuarter).toEqual(teamsResult.home.secondQuarter);
                });
            });

            describe("third quarter", () => {
                test("away team", () => {
                    expect(gameStats.awayTeamStats.thirdQuarter).toEqual(teamsResult.away.thirdQuarter);
                });

                test("home team", () => {
                    expect(gameStats.homeTeamStats.thirdQuarter).toEqual(teamsResult.home.thirdQuarter);
                });
            });

            describe("fourth quarter", () => {
                test("away team", () => {
                    expect(gameStats.awayTeamStats.fourthQuarter).toEqual(teamsResult.away.fourthQuarter);
                });

                test("home team", () => {
                    expect(gameStats.homeTeamStats.fourthQuarter).toEqual(teamsResult.home.fourthQuarter);
                });
            });

            describe("final score", () => {
                test("away team", () => {
                    expect(gameStats.awayTeamStats.finalScore).toEqual(teamsResult.away.finalScore);
                });

                test("home team", () => {
                    expect(gameStats.homeTeamStats.finalScore).toEqual(teamsResult.home.finalScore);
                });
            });
        });

        describe("team id", function () {
            test("away team", () => {
                expect(gameStats.awayTeamStats.teamId).toEqual(teamsResult.away.teamId);
            });

            test("home team", () => {
                expect(gameStats.homeTeamStats.teamId).toEqual(teamsResult.home.teamId);
            });
        });
    });
});