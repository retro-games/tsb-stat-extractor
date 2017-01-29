/**
 * Created by edgrams on 1/29/17.
 */

const health = {
    DOUBTFUL: 'doubtful',
    HEALTHY: 'healthy',
    PROBABLE: 'probable',
    QUESTIONABLE: 'queestionable',
    NA: ''
};

function getValue(healthBinary) {
    let healthValue;

    switch (healthBinary) {
        case '00':
            healthValue = health.HEALTHY;
            break;
        case '01':
            healthValue = health.PROBABLE;
            break;
        case '10':
            healthValue = health.QUESTIONABLE;
            break;
        case '11':
            healthValue = health.DOUBTFUL;
            break;
        default:
            healthValue = health.NA;
            break;
    }

    return healthValue;
}