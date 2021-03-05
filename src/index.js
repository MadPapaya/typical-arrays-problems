exports.min = function min (arr) {
    return (arr && arr.length) ? Math.min.apply(0, arr) : 0
};

exports.max = function max (arr) {
    return (arr && arr.length) ? Math.max.apply(0, arr) : 0
};

exports.avg = function avg (arr) {
    return (arr && arr.length) ? arr.reduce((accumulator, number) => accumulator + number) / arr.length : 0
};