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

let encodedSaveState, result, saveState;

describe("game-one", () => {
    describe("generateTeamStats", () => {
        test("should do stuff", () => {
            encodedSaveState = require("../../fixtures/nes/game_one/state.json");
            saveState = decode(encodedSaveState.binary);
            result = extract(saveState);
            expect(true).toBe(true);
        });
    });
});