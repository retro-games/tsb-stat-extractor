
import Player from "./player";

export default class KickStats extends Player {
    constructor(extraPointAttempts, extraPointsMade, fieldGoalAttempts, fieldGoalsMade, health, condition) {
        super();
        this.extraPointAttempts = extraPointAttempts;
        this.extraPointsMade = extraPointsMade;
        this.fieldGoalAttempts = fieldGoalAttempts;
        this.fieldGoalsMade = fieldGoalsMade;
        this.health = health;
        this.condition = condition;
    }
}