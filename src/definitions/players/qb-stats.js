/**
 * Created by edgrams on 1/29/17.
 */

import Player from "./player";

export default class QBStats extends Player {
    constructor(passAttempts, passCompletions, passInterceptions, passTouchdowns, passYards, rushAttempts,
                rushTouchdowns, rushYards, health, condition) {
        super(health, condition);
        this.passAttempts = passAttempts;
        this.passCompletions = passCompletions;
        this.passInterceptions = passInterceptions;
        this.passTouchdowns = passTouchdowns;
        this.passYards = passYards;
        this.rushAttempts = rushAttempts;
        this.rushTouchdowns = rushTouchdowns;
        this.rushYards = rushYards;
    }
}