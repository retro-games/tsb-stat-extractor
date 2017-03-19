
export default class TeamStats {
    constructor(teamId, firstDowns, firstQuarter, secondQuarter, thirdQuarter, fourthQuarter, finalScore) {
        this.firstDowns = firstDowns;
        this.score = {
            firstQuarter: firstQuarter,
            secondQuarter: secondQuarter,
            thirdQuarter: thirdQuarter,
            fourthQuarter: fourthQuarter,
            finalScore: finalScore
        };
        this.teamId = teamId;
    }
}