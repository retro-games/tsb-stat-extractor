/**
 * Created by edgrams on 2/11/17.
 */

import * as PlayerStatsGenerator from '../../../src/extractors/nes/player-stats-generator';

let bytes, result;

describe('player-stats-generator', () => {
   describe('getYards', () => {
       test('total yards', () => {
           result = PlayerStatsGenerator.getYards(50, 0);

           expect(result).toEqual(50);
       });

       test('total yards w/ mulitiplier', () => {
           result = PlayerStatsGenerator.getYards(50, 1);

           expect(result).toEqual(306);
       });

       test('total negative yards', () => {
           result = PlayerStatsGenerator.getYards(253, 255);

           expect(result).toEqual(-3);
       });

       test('total negative yards w/ negative mulitiplier', () => {
           result = PlayerStatsGenerator.getYards(253, 254);

           expect(result).toEqual(-259);
       });
   });

    describe('getQBStats', () => {
        beforeEach(() => {
            bytes = new Uint8Array([11, 5, 1, 2, 50, 1, 3, 79, 0, 0]);
            result = PlayerStatsGenerator.getQBStats(bytes, 0);
        });

        test('pass attempts', () => {
            expect(result.passAttempts).toEqual(11);
        });

        test('pass completions', () => {
            expect(result.passCompletions).toEqual(5);
        });

        test('pass touchdowns', () => {
            expect(result.passTouchdowns).toEqual(1);
        });

        test('pass interceptions', () => {
            expect(result.passInterceptions).toEqual(2);
        });

        test('pass yards', () => {
            expect(result.passYards).toEqual(306);
        });

        test('rush attempts', () => {
            expect(result.rushAttempts).toEqual(3);
        });

        test('rush yards', () => {
            expect(result.rushYards).toEqual(79);
        });

        test('rush touchdowns', () => {
            expect(result.rushTouchdowns).toEqual(0);
        });
    });
});