
import Player from "./player";

export default class DefPlayerStats extends Player {
    constructor(interceptions, intTouchDowns, intYards, sacks, health, condition) {
        super();
        this.interceptions = interceptions;
        this.intTouchdowns = intTouchDowns;
        this.intYards = intYards;
        this.sacks = sacks;
        this.health = health;
        this.condition = condition;
    }
}