
exports.getIntRandom = function (length, rangeL, rangeW) {
    var arr = []
    for (var i = 0; i < length; i ++) {
        var random = Math.random() * (rangeW - rangeL) + rangeL;
        arr.push(Math.round(random * 100)/100) ;
    }
    return arr;
}

exports.getNearlyOrderRandom = function(length, rangeL, rangeW, index) {
        var arr = [];
        var average = (rangeW - rangeL) / length;
        for (var i = 0; i < length; i++) {
            arr.push(rangeL + i * average);
        }
        //change some data position.
        for (var j = 0; j<index; j++) {
            var positionOne = parseInt(Math.random() * length);
            var positionTwo =  length - positionOne;
            var temp = arr[positionOne];
            arr[positionOne] = arr[positionTwo];
            arr[positionTwo] = temp;
        }
        return arr;
}
