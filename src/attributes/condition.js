/**
 * Created by edgrams on 1/29/17.
 */

const conditions = {
    AVERAGE: 'average',
    BAD: 'bad',
    EXCELLENT: 'excellent',
    GOOD: 'good',
    NA: ''
};

function getValue(conditionBinary) {
    let conditionValue;

    switch (conditionBinary) {
        case '00':
            conditionValue = conditions.BAD;
            break;
        case '01':
            conditionValue = conditions.AVERAGE;
            break;
        case '10':
            conditionValue = conditions.GOOD;
            break;
        case '11':
            conditionValue = conditions.EXCELLENT;
            break;
        default:
            conditionValue = conditions.NA;
            break;
    }

    return conditionValue;
}

export {conditions, getValue};