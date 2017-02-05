/**
 * Created by edgrams on 1/29/17.
 */

export class OffPlayerStats {
    constructor(condition, health, kickReturns, kickReturnTouchdowns, kickReturnYards, puntReturns,
                puntReturnTouchdowns, puntReturnYards, receptions, recTouchdowns, recYards, rushAttempts,
                rushTouchdowns, rushYards) {
        this.condition = condition;
        this.health = health;
        this.kickReturns = kickReturns;
        this.kickReturnTouchdowns = kickReturnTouchdowns;
        this.kickReturnYards = kickReturnYards;
        this.puntReturns = puntReturns;
        this.puntReturnTouchdowns = puntReturnTouchdowns;
        this.puntReturnYards = puntReturnYards;
        this.receptions = receptions;
        this.recTouchdowns = recTouchdowns;
        this.recYards = recYards;
        this.rushAttempts = rushAttempts;
        this.rushTouchdowns = rushTouchdowns;
        this.rushYards = rushYards;
    }
}