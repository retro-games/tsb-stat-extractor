/**
 * Created by edgrams on 1/29/17.
 */

const conditionsBinary = {
    AVERAGE: "01",
    BAD: "00",
    EXCELLENT: "11",
    GOOD: "10",
};

const conditions = {
    AVERAGE: "average",
    BAD: "bad",
    EXCELLENT: "excellent",
    GOOD: "good",
    NA: ""
};

function getValue(binary) {
    let conditionValue;

    switch (binary) {
        case conditionsBinary.BAD:
            conditionValue = conditions.BAD;
            break;
        case conditionsBinary.AVERAGE:
            conditionValue = conditions.AVERAGE;
            break;
        case conditionsBinary.GOOD:
            conditionValue = conditions.GOOD;
            break;
        case conditionsBinary.EXCELLENT:
            conditionValue = conditions.EXCELLENT;
            break;
        default:
            conditionValue = conditions.NA;
            break;
    }

    return conditionValue;
}

export {conditionsBinary, conditions, getValue};