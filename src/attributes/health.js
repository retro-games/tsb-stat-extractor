
const healthBinary = {
    DOUBTFUL: "11",
    HEALTHY: "00",
    PROBABLE: "01",
    QUESTIONABLE: "10",
};

const health = {
    DOUBTFUL: "doubtful",
    HEALTHY: "healthy",
    PROBABLE: "probable",
    QUESTIONABLE: "queestionable",
    NA: ""
};

function getValue(binary) {
    let healthValue;

    switch (binary) {
        case healthBinary.HEALTHY:
            healthValue = health.HEALTHY;
            break;
        case healthBinary.PROBABLE:
            healthValue = health.PROBABLE;
            break;
        case healthBinary.QUESTIONABLE:
            healthValue = health.QUESTIONABLE;
            break;
        case healthBinary.DOUBTFUL:
            healthValue = health.DOUBTFUL;
            break;
        default:
            healthValue = health.NA;
            break;
    }

    return healthValue;
}

export {healthBinary, health, getValue};