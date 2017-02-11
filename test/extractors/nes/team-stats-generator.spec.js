/**
 * Created by edgrams on 2/5/17.
 */

jest.unmock("../../../src/definitions/team-stats");
jest.unmock("../../../src/extractors/nes/team-stats-generator");
jest.unmock("../../../src/utility");

import generateTeamStats from "../../../src/extractors/nes/team-stats-generator";

let bytes, statLocations, result;

describe("team-stats-generator", function () {
    describe("generateTeamStats", function () {
        describe("home", function () {
            beforeEach(() => {
                bytes = new Uint8Array([8, 2, 0, 16, 7, 3, 32]);
                statLocations = {
                    FIRST_DOWNS: 0,
                    SCORES: 2,
                    TEAM_ID: 1
                };
                result = generateTeamStats(bytes, statLocations);
            });

            test("first downs", () => {
                expect(result.firstDowns).toEqual(8);
            });

            test("team id", () => {
                expect(result.teamId).toEqual(2);
            });

            test("first quarter score", () => {
                expect(result.score.firstQuarter).toEqual(0);
            });

            test("second quarter score", () => {
                expect(result.score.secondQuarter).toEqual(10);
            });

            test("third quarter score", () => {
                expect(result.score.thirdQuarter).toEqual(7);
            });

            test("fourth quarter score", () => {
                expect(result.score.fourthQuarter).toEqual(3);
            });

            test("final score", () => {
                expect(result.score.finalScore).toEqual(20);
            });
        });

        describe("away", function () {
            beforeEach(() => {
                bytes = new Uint8Array([10, 1, 16, 16, 0, 23, 55]);
                statLocations = {
                    FIRST_DOWNS: 0,
                    SCORES: 2,
                    TEAM_ID: 1
                };
                result = generateTeamStats(bytes, statLocations);
            });

            test("first downs", () => {
                expect(result.firstDowns).toEqual(10);
            });

            test("team id", () => {
                expect(result.teamId).toEqual(1);
            });

            test("first quarter score", () => {
                expect(result.score.firstQuarter).toEqual(10);
            });

            test("second quarter score", () => {
                expect(result.score.secondQuarter).toEqual(10);
            });

            test("third quarter score", () => {
                expect(result.score.thirdQuarter).toEqual(0);
            });

            test("fourth quarter score", () => {
                expect(result.score.fourthQuarter).toEqual(17);
            });

            test("final score", () => {
                expect(result.score.finalScore).toEqual(37);
            });
        });
    });
});