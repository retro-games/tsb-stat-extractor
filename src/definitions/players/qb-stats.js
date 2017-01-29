/**
 * Created by edgrams on 1/29/17.
 */

class QBStats {
    constructor(condition, health, passAttempts, passCompletions, passInterceptions, passTouchdowns, passYards,
                rushAttempts, rushTouchdowns, rushYards) {
        this.condition = condition;
        this.health = health;
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