
import Player from "./player";

export default class PuntStats extends Player {
    constructor(punts, puntYards, health, condition) {
        super();
        this.punts = punts;
        this.puntYards = puntYards;
        this.health = health;
        this.condition = condition;
    }
}