/**
 * Created by edgrams on 2/11/17.
 */

jest.unmock("../../../src/definitions/players/def-player-stats");
jest.unmock("../../../src/definitions/players/kick-stats");
jest.unmock("../../../src/definitions/players/off-player-stats");
jest.unmock("../../../src/definitions/players/punt-stats");
jest.unmock("../../../src/definitions/players/qb-stats");
jest.unmock("../../../src/extractors/nes/player-stats-generator");

import * as PlayerStatsGenerator from "../../../src/extractors/nes/player-stats-generator";

let bytes, result, statLocations;

describe("player-stats-generator", () => {
    describe("getPlayerStatsForTeam", () => {
        test("total yards", () => {
            bytes = Array.apply(null, Array(242)).map(() => { return 0; });
            statLocations = {
                PLAYER_STATS: 0
            };

            result = PlayerStatsGenerator.getPlayerStatsForTeam(bytes, statLocations);

            expect(result.length).toEqual(25);
        });
    });

    describe("getYards", () => {
       test("total yards", () => {
           result = PlayerStatsGenerator.getYards(50, 0);

           expect(result).toEqual(50);
       });

       test("total yards w/ mulitiplier", () => {
           result = PlayerStatsGenerator.getYards(50, 1);

           expect(result).toEqual(306);
       });

       test("total negative yards", () => {
           result = PlayerStatsGenerator.getYards(253, 255);

           expect(result).toEqual(-3);
       });

       test("total negative yards w/ negative mulitiplier", () => {
           result = PlayerStatsGenerator.getYards(253, 254);

           expect(result).toEqual(-259);
       });
    });

    describe("getQBStats", () => {
        beforeEach(() => {
            bytes = new Uint8Array([11, 5, 1, 2, 50, 1, 3, 79, 0, 0]);
            result = PlayerStatsGenerator.getQBStats(bytes, 0);
        });

        test("pass attempts", () => {
            expect(result.passAttempts).toEqual(11);
        });

        test("pass completions", () => {
            expect(result.passCompletions).toEqual(5);
        });

        test("pass touchdowns", () => {
            expect(result.passTouchdowns).toEqual(1);
        });

        test("pass interceptions", () => {
            expect(result.passInterceptions).toEqual(2);
        });

        test("pass yards", () => {
            expect(result.passYards).toEqual(306);
        });

        test("rush attempts", () => {
            expect(result.rushAttempts).toEqual(3);
        });

        test("rush yards", () => {
            expect(result.rushYards).toEqual(79);
        });

        test("rush touchdowns", () => {
            expect(result.rushTouchdowns).toEqual(0);
        });
    });

    describe("getOffPlayerStats", () => {
        beforeEach(() => {
            bytes = new Uint8Array([3, 69, 0, 1, 5, 12, 1, 0, 1, 254, 255, 0, 25, 157, 0, 3]);
            result = PlayerStatsGenerator.getOffPlayerStats(bytes, 0);
        });

        test("receptions", () => {
            expect(result.receptions).toEqual(3);
        });

        test("receiving yards", () => {
            expect(result.recYards).toEqual(69);
        });

        test("receiving touchdowns", () => {
            expect(result.recTouchdowns).toEqual(1);
        });

        test("kick returns", () => {
            expect(result.kickReturns).toEqual(5);
        });

        test("kick return yards", () => {
            expect(result.kickReturnYards).toEqual(268);
        });

        test("kick return touchdowns", () => {
            expect(result.kickReturnTouchdowns).toEqual(0);
        });

        test("punt returns", () => {
            expect(result.puntReturns).toEqual(1);
        });

        test("punt return yards", () => {
            expect(result.puntReturnYards).toEqual(-2);
        });

        test("punt return touchdowns", () => {
            expect(result.puntReturnTouchdowns).toEqual(0);
        });

        test("rushing attempts", () => {
            expect(result.rushAttempts).toEqual(25);
        });

        test("rushing yards", () => {
            expect(result.rushYards).toEqual(157);
        });

        test("rushing touchdowns", () => {
            expect(result.rushTouchdowns).toEqual(3);
        });
    });

    describe("getDefPlayerStats", () => {
        beforeEach(() => {
            bytes = new Uint8Array([2, 1, 4, 0, 0]);
            result = PlayerStatsGenerator.getDefPlayerStats(bytes, 0);
        });

        test("sacks", () => {
            expect(result.sacks).toEqual(2);
        });

        test("interceptions", () => {
            expect(result.interceptions).toEqual(1);
        });

        test("interception yards", () => {
            expect(result.intYards).toEqual(4);
        });

        test("interception touchdowns", () => {
            expect(result.intTouchdowns).toEqual(0);
        });
    });

    describe("getKickStats", () => {
        beforeEach(() => {
            bytes = new Uint8Array([2, 2, 1, 0,]);
            result = PlayerStatsGenerator.getKickStats(bytes, 0);
        });

        test("field goal attempts", () => {
            expect(result.fieldGoalAttempts).toEqual(2);
        });

        test("field goals made", () => {
            expect(result.fieldGoalsMade).toEqual(2);
        });

        test("extra point attempts", () => {
            expect(result.extraPointAttempts).toEqual(1);
        });

        test("extra points made", () => {
            expect(result.extraPointsMade).toEqual(0);
        });
    });

    describe("getPuntStats", () => {
        beforeEach(() => {
            bytes = new Uint8Array([8, 10, 2]);
            result = PlayerStatsGenerator.getPuntStats(bytes, 0);
        });

        test("punts", () => {
            expect(result.punts).toEqual(8);
        });

        test("punt yards", () => {
            expect(result.puntYards).toEqual(522);
        });
    });
});