/**
 * Created by edgrams on 1/29/17.
 */

class TeamStats {
    constructor(teamId, firstDowns, firstQuarter, secondQuarter, thirdQuarter, fourthQuarter) {
        this.firstDowns = firstDowns;
        this.score = {
            firstQuarter: firstQuarter,
            secondQuarter: secondQuarter,
            thirdQuarter: thirdQuarter,
            fourthQuarter: fourthQuarter
        };
        this.teamId = teamId;
    }
}