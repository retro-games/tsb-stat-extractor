/**
 * Created by edgrams on 1/29/17.
 */

export class GameStats {
    constructor(type) {
        this.type = type;
        this.home = {
            team: undefined,
            player: []
        };
        this.away = {
            team: undefined,
            player: []
        };
    }
}