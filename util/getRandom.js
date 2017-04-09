
exports.getIntRandom = function (length, rangeL, rangeW) {
    var arr = []
    for (var i = 0; i < length; i ++) {
        var random = Math.random() * (rangeW - rangeL) + rangeL;
        arr.push(Math.round(random * 100)/100) ;
    }
    return arr;
}
