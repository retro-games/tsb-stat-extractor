
export default class GameStats {
    constructor(awayPlayerStats, awayTeamStats, homePlayerStats, homeTeamStats, saveStateType) {
        this.awayPlayerStats = awayPlayerStats;
        this.awayTeamStats = awayTeamStats;
        this.homePlayerStats = homePlayerStats;
        this.homeTeamStats = homeTeamStats;
        this.saveStateType = saveStateType;
    }
}