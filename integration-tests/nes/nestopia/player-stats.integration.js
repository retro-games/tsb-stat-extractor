
import {extract} from "../../../src/index";
import decode from "../../helpers/decode";

import saveStateGameOne from "../../fixtures/nes/game-one/state.json";
import saveStateGameTwo from "../../fixtures/nes/game-two/state.json";
import playerStatsGameOne from "../../fixtures/nes/game-one/player-stats.json";
import playerStatsGameTwo from "../../fixtures/nes/game-two/player-stats.json";

let decodedSaveState, encodedSaveState, gameStats, games, i, playersResult;

games = [{
            saveState: saveStateGameOne,
            playersStats: playerStatsGameOne
        },
        {
            saveState: saveStateGameTwo,
            playersStats: playerStatsGameTwo
        }];

describe("generatePlayerStats", () => {
    games.forEach((game) => {
        beforeAll(() => {
            encodedSaveState = game.saveState;
            decodedSaveState = decode(encodedSaveState.binary);
            gameStats = extract(decodedSaveState);
            playersResult = game.playersStats;
        });

        describe("qb stats", function () {
            test("away team", () => {
                for (i = 0; i <= 1; i++) {
                    expect(gameStats.awayPlayerStats[i].passAttempts).toEqual(playersResult.
                        away.player[i].passAttempts);
                    expect(gameStats.awayPlayerStats[i].passCompletions).toEqual(playersResult.
                        away.player[i].passCompletions);
                    expect(gameStats.awayPlayerStats[i].passInterceptions).toEqual(playersResult.
                        away.player[i].passInterceptions);
                    expect(gameStats.awayPlayerStats[i].passTouchdowns).toEqual(playersResult.
                        away.player[i].passTouchdowns);
                    expect(gameStats.awayPlayerStats[i].passYards).toEqual(playersResult.
                        away.player[i].passYards);
                    expect(gameStats.awayPlayerStats[i].rushAttempts).toEqual(playersResult.
                        away.player[i].rushAttempts);
                    expect(gameStats.awayPlayerStats[i].rushTouchdowns).toEqual(playersResult.
                        away.player[i].rushTouchdowns);
                    expect(gameStats.awayPlayerStats[i].rushYards).toEqual(playersResult.
                        away.player[i].rushYards);
                    expect(gameStats.awayPlayerStats[i].health).toEqual(playersResult.
                        away.player[i].health);
                    expect(gameStats.awayPlayerStats[i].condition).toEqual(playersResult.
                        away.player[i].condition);
                }
            });

            test("home team", () => {
                for (i = 0; i <= 1; i++) {
                    expect(gameStats.homePlayerStats[i].passAttempts).toEqual(playersResult.
                        home.player[i].passAttempts);
                    expect(gameStats.homePlayerStats[i].passCompletions).toEqual(playersResult.
                        home.player[i].passCompletions);
                    expect(gameStats.homePlayerStats[i].passInterceptions).toEqual(playersResult.
                        home.player[i].passInterceptions);
                    expect(gameStats.homePlayerStats[i].passTouchdowns).toEqual(playersResult.
                        home.player[i].passTouchdowns);
                    expect(gameStats.homePlayerStats[i].passYards).toEqual(playersResult.
                        home.player[i].passYards);
                    expect(gameStats.homePlayerStats[i].rushAttempts).toEqual(playersResult.
                        home.player[i].rushAttempts);
                    expect(gameStats.homePlayerStats[i].rushTouchdowns).toEqual(playersResult.
                        home.player[i].rushTouchdowns);
                    expect(gameStats.homePlayerStats[i].rushYards).toEqual(playersResult.
                        home.player[i].rushYards);
                    expect(gameStats.homePlayerStats[i].health).toEqual(playersResult.
                        home.player[i].health);
                    expect(gameStats.homePlayerStats[i].condition).toEqual(playersResult.
                        home.player[i].condition);
                }
            });
        });

        describe("off player stats", function () {
            test("away team", () => {
                for (i = 2; i <= 11; i++) {
                    expect(gameStats.awayPlayerStats[i].kickReturns).toEqual(playersResult.
                        away.player[i].kickReturns);
                    expect(gameStats.awayPlayerStats[i].kickReturnTouchdowns).toEqual(playersResult.
                        away.player[i].kickReturnTouchdowns);
                    expect(gameStats.awayPlayerStats[i].kickReturnYards).toEqual(playersResult.
                        away.player[i].kickReturnYards);
                    expect(gameStats.awayPlayerStats[i].puntReturns).toEqual(playersResult.
                        away.player[i].puntReturns);
                    expect(gameStats.awayPlayerStats[i].puntReturnTouchdowns).toEqual(playersResult.
                        away.player[i].puntReturnTouchdowns);
                    expect(gameStats.awayPlayerStats[i].puntReturnYards).toEqual(playersResult.
                        away.player[i].puntReturnYards);
                    expect(gameStats.awayPlayerStats[i].receptions).toEqual(playersResult.
                        away.player[i].receptions);
                    expect(gameStats.awayPlayerStats[i].recTouchdowns).toEqual(playersResult.
                        away.player[i].recTouchdowns);
                    expect(gameStats.awayPlayerStats[i].recYards).toEqual(playersResult.
                        away.player[i].recYards);
                    expect(gameStats.awayPlayerStats[i].rushAttempts).toEqual(playersResult.
                        away.player[i].rushAttempts);
                    expect(gameStats.awayPlayerStats[i].rushTouchdowns).toEqual(playersResult.
                        away.player[i].rushTouchdowns);
                    expect(gameStats.awayPlayerStats[i].rushYards).toEqual(playersResult.
                        away.player[i].rushYards);
                    expect(gameStats.awayPlayerStats[i].health).toEqual(playersResult.
                        away.player[i].health);
                    expect(gameStats.awayPlayerStats[i].condition).toEqual(playersResult.
                        away.player[i].condition);
                }
            });

            test("home team", () => {
                for (i = 2; i <= 11; i++) {
                    expect(gameStats.homePlayerStats[i].kickReturns).toEqual(playersResult.
                        home.player[i].kickReturns);
                    expect(gameStats.homePlayerStats[i].kickReturnTouchdowns).toEqual(playersResult.
                        home.player[i].kickReturnTouchdowns);
                    expect(gameStats.homePlayerStats[i].kickReturnYards).toEqual(playersResult.
                        home.player[i].kickReturnYards);
                    expect(gameStats.homePlayerStats[i].puntReturns).toEqual(playersResult.
                        home.player[i].puntReturns);
                    expect(gameStats.homePlayerStats[i].puntReturnTouchdowns).toEqual(playersResult.
                        home.player[i].puntReturnTouchdowns);
                    expect(gameStats.homePlayerStats[i].puntReturnYards).toEqual(playersResult.
                        home.player[i].puntReturnYards);
                    expect(gameStats.homePlayerStats[i].receptions).toEqual(playersResult.
                        home.player[i].receptions);
                    expect(gameStats.homePlayerStats[i].recTouchdowns).toEqual(playersResult.
                        home.player[i].recTouchdowns);
                    expect(gameStats.homePlayerStats[i].recYards).toEqual(playersResult.
                        home.player[i].recYards);
                    expect(gameStats.homePlayerStats[i].rushAttempts).toEqual(playersResult.
                        home.player[i].rushAttempts);
                    expect(gameStats.homePlayerStats[i].rushTouchdowns).toEqual(playersResult.
                        home.player[i].rushTouchdowns);
                    expect(gameStats.homePlayerStats[i].rushYards).toEqual(playersResult.
                        home.player[i].rushYards);
                    expect(gameStats.homePlayerStats[i].health).toEqual(playersResult.
                        home.player[i].health);
                    expect(gameStats.homePlayerStats[i].condition).toEqual(playersResult.
                        home.player[i].condition);
                }
            });
        });

        describe("def stats", function () {
            test("away team", () => {
                for (i = 12; i <= 22; i++) {
                    expect(gameStats.awayPlayerStats[i].sacks).toEqual(playersResult.
                        away.player[i].sacks);
                    expect(gameStats.awayPlayerStats[i].interceptions).toEqual(playersResult.
                        away.player[i].interceptions);
                    expect(gameStats.awayPlayerStats[i].intTouchdowns).toEqual(playersResult.
                        away.player[i].intTouchdowns);
                    expect(gameStats.awayPlayerStats[i].intYards).toEqual(playersResult.
                        away.player[i].intYards);
                    expect(gameStats.awayPlayerStats[i].health).toEqual(playersResult.
                        away.player[i].health);
                    expect(gameStats.awayPlayerStats[i].condition).toEqual(playersResult.
                        away.player[i].condition);
                }
            });

            test("home team", () => {
                for (i = 12; i <= 22; i++) {
                    expect(gameStats.homePlayerStats[i].sacks).toEqual(playersResult.
                        home.player[i].sacks);
                    expect(gameStats.homePlayerStats[i].interceptions).toEqual(playersResult.
                        home.player[i].interceptions);
                    expect(gameStats.homePlayerStats[i].intTouchdowns).toEqual(playersResult.
                        home.player[i].intTouchdowns);
                    expect(gameStats.homePlayerStats[i].intYards).toEqual(playersResult.
                        home.player[i].intYards);
                    expect(gameStats.homePlayerStats[i].health).toEqual(playersResult.
                        home.player[i].health);
                    expect(gameStats.homePlayerStats[i].condition).toEqual(playersResult.
                        home.player[i].condition);
                }
            });
        });

        describe("kick stats", function () {
            test("away team", () => {
                for (i = 12; i <= 22; i++) {
                    expect(gameStats.awayPlayerStats[i].extraPointAttempts).toEqual(playersResult.
                        away.player[i].extraPointAttempts);
                    expect(gameStats.awayPlayerStats[i].extraPointsMade).toEqual(playersResult.
                        away.player[i].extraPointsMade);
                    expect(gameStats.awayPlayerStats[i].fieldGoalAttempts).toEqual(playersResult.
                        away.player[i].fieldGoalAttempts);
                    expect(gameStats.awayPlayerStats[i].fieldGoalsMade).toEqual(playersResult.
                        away.player[i].fieldGoalsMade);
                    expect(gameStats.awayPlayerStats[i].health).toEqual(playersResult.
                        away.player[i].health);
                    expect(gameStats.awayPlayerStats[i].condition).toEqual(playersResult.
                        away.player[i].condition);
                }
            });

            test("home team", () => {
                for (i = 12; i <= 22; i++) {
                    expect(gameStats.homePlayerStats[i].extraPointAttempts).toEqual(playersResult.
                        home.player[i].extraPointAttempts);
                    expect(gameStats.homePlayerStats[i].extraPointsMade).toEqual(playersResult.
                        home.player[i].extraPointsMade);
                    expect(gameStats.homePlayerStats[i].fieldGoalAttempts).toEqual(playersResult.
                        home.player[i].fieldGoalAttempts);
                    expect(gameStats.homePlayerStats[i].fieldGoalsMade).toEqual(playersResult.
                        home.player[i].fieldGoalsMade);
                    expect(gameStats.homePlayerStats[i].health).toEqual(playersResult.
                        home.player[i].health);
                    expect(gameStats.homePlayerStats[i].condition).toEqual(playersResult.
                        home.player[i].condition);
                }
            });
        });

        describe("punt stats", function () {
            test("away team", () => {
                for (i = 12; i <= 22; i++) {
                    expect(gameStats.awayPlayerStats[i].punts).toEqual(playersResult.
                        away.player[i].punts);
                    expect(gameStats.awayPlayerStats[i].puntYards).toEqual(playersResult.
                        away.player[i].puntYards);
                    expect(gameStats.awayPlayerStats[i].health).toEqual(playersResult.
                        away.player[i].health);
                    expect(gameStats.awayPlayerStats[i].condition).toEqual(playersResult.
                        away.player[i].condition);
                }
            });

            test("home team", () => {
                for (i = 12; i <= 22; i++) {
                    expect(gameStats.homePlayerStats[i].punts).toEqual(playersResult.
                        home.player[i].punts);
                    expect(gameStats.homePlayerStats[i].puntYards).toEqual(playersResult.
                        home.player[i].puntYards);
                    expect(gameStats.homePlayerStats[i].health).toEqual(playersResult.
                        home.player[i].health);
                    expect(gameStats.homePlayerStats[i].condition).toEqual(playersResult.
                        home.player[i].condition);
                }
            });
        });
    });
});