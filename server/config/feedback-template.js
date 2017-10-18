let answer = {
    wasteOfTime: 1,
    goodUseOfTime: 2,
    poorlyRun: 1,
    wellManaged: 2,
    sparse: 1,
    sufficient: 2,
    rich: 3,
    none: 1,
    insufficient: 2,
    wellDefinedAndTracked: 3
};

let feedbackType = {
    necessity: 1,
    conduct: 2,
    participation: 3,
    outcomes: 4
};

module.exports = {
    feedbackType: feedbackType,
    answer: answer,
    template: {
        necessity: {
            name: 'Necessity',
            type: feedbackType.necessity,
            option: [
                {name: 'Waste of Time', value: answer.wasteOfTime},
                {name: 'Good Use of Time', value: answer.goodUseOfTime}
            ]
        },
        conduct: {
            name: 'Conduct',
            type: feedbackType.conduct,
            option: [
                {name: 'Poorly Run', value: answer.poorlyRun},
                {name: 'Well Managed', value: answer.wellManaged}
            ]
        },
        participation: {
            name: 'Participation',
            type: feedbackType.participation,
            option: [
                {name: 'Sparse', value: answer.sparse},
                {name: 'Sufficient', value: answer.sufficient},
                {name: 'Rich', value: answer.rich}
            ]
        },
        outcomes: {
            name: 'Outcomes',
            type: feedbackType.outcomes,
            option: [
                {name: 'None', value: answer.none},
                {name: 'Yes, But Insufficient', value: answer.insufficient},
                {name: 'Well defined and tracked', value: answer.wellDefinedAndTracked}
            ]
        }
    }
};