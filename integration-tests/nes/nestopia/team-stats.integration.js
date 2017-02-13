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

import extract from "../../../src/main";
import decode from "../../helpers/decode";

let encodedSaveState, gameStats, games, teamsResult, saveState;

games = [{
            saveStatePath: "../../fixtures/nes/game-one/state.json",
            teamStatsPath: "../../fixtures/nes/game-one/team-stats.json"
        },
        {
            saveStatePath: "../../fixtures/nes/game-two/state.json",
            teamStatsPath: "../../fixtures/nes/game-two/team-stats.json"
        }];

describe("generateTeamStats", () => {
    games.forEach((game) => {
        beforeAll(() => {
            encodedSaveState = require(game.saveStatePath);
            saveState = decode(encodedSaveState.binary);
            gameStats = extract(saveState);
            teamsResult = require(game.teamStatsPath);
        });

        describe("first downs", function () {
            test("away team", () => {
                gameStats.awayTeamStats.firstDowns = teamsResult.away.firstDowns;
            });

            test("home team", () => {
                gameStats.homeTeamStats.firstDowns = teamsResult.home.firstDowns;
            });
        });

        describe("scores", function () {
            describe("first quarter", () => {
                test("away team", () => {
                    gameStats.awayTeamStats.firstQuarter = teamsResult.away.firstQuarter;
                });

                test("home team", () => {
                    gameStats.homeTeamStats.firstQuarter = teamsResult.home.firstQuarter;
                });
            });

            describe("second quarter", () => {
                test("away team", () => {
                    gameStats.awayTeamStats.secondQuarter = teamsResult.away.secondQuarter;
                });

                test("home team", () => {
                    gameStats.homeTeamStats.secondQuarter = teamsResult.home.secondQuarter;
                });
            });

            describe("third quarter", () => {
                test("away team", () => {
                    gameStats.awayTeamStats.thirdQuarter = teamsResult.away.thirdQuarter;
                });

                test("home team", () => {
                    gameStats.homeTeamStats.thirdQuarter = teamsResult.home.thirdQuarter;
                });
            });

            describe("fourth quarter", () => {
                test("away team", () => {
                    gameStats.awayTeamStats.fourthQuarter = teamsResult.away.fourthQuarter;
                });

                test("home team", () => {
                    gameStats.homeTeamStats.fourthQuarter = teamsResult.home.fourthQuarter;
                });
            });

            describe("final score", () => {
                test("away team", () => {
                    gameStats.awayTeamStats.finalScore = teamsResult.away.finalScore;
                });

                test("home team", () => {
                    gameStats.homeTeamStats.finalScore = teamsResult.home.finalScore;
                });
            });
        });

        describe("team id", function () {
            test("away team", () => {
                gameStats.awayTeamStats.teamId = teamsResult.away.teamId;
            });

            test("home team", () => {
                gameStats.homeTeamStats.teamId = teamsResult.home.teamId;
            });
        });
    });
});