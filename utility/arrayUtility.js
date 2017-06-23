
exports.getIntRandom = function (length, rangeL, rangeW) {
    var arr = []
    for (var i = 0; i < length; i ++) {
        var random = Math.random() * (rangeW - rangeL) + rangeL;
        arr.push(Math.round(random * 100)/100) ;
    }
    return arr;
}

exports.getNearlyOrderRandom = function(length, rangeL, rangeW, index, intParse) {
        var arr = [];
        var average = (rangeW - rangeL) / length;
        for (var i = 0; i < length; i++) {
            if (intParse == undefined || !intParse)
                arr.push(rangeL + i * average);
            else 
                arr.push(parseInt(rangeL + i * average));
        }
        //change some data position.
        for (var j = 0; j<index; j++) {
            var positionOne = parseInt(Math.random() * length);
            var positionTwo =  length - positionOne - 1;
            var temp = arr[positionOne];
            arr[positionOne] = arr[positionTwo];
            arr[positionTwo] = temp;
        }
        return arr;
}
