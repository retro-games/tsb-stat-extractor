/**
 * Created by edgrams on 2/5/17.
 */

import {generateTeamStats} from '../../../src/extractors/nes/team-stats-generator';

describe('team-stats-generator', function () {
    describe('generateTeamStats', function () {
        test('should do stuff', () => {
            let state = require('../../fixtures/nes/game_one/state.json');
            console.log(atob(state.binary));
            expect(true).toBe(true);
        });
    });
});