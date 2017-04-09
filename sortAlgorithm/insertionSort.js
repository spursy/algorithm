exports.insertionSort = function (arr) {
    var length = arr.length;
    for (var i = 1; i < length; i ++) {
        for (var j = i; j > 0; j --) {
            if (arr[j] < arr[j-1]) {
                var temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            } else {
                break;
            }
        }
    }
    return arr;
} 

exports.insertionSortHigh = function (arr) {
    var length = arr.length;
    for (var i = 0; i < length; i ++) {
        var temp = arr[i + 1]
        var j = i+1;
        for (; j > 0 && temp < arr[j-1]; j --) {
            arr[j] = arr[j-1]
        }
        arr[j] = temp;
    }
}