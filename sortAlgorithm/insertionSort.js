/**
 * if current data is less than previous,
 * then change the current data with previous one.
 */
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
/**
* if current data is less than previous,
 * do not change the position immediately.
 *  Only change previous to current one.
 */
exports.insertionSortHigh = function (arr) {
    var length = arr.length;
    for (var i = 1; i < length; i ++) {
        var temp = arr[i]
        var j = i;
        for (; j > 0 && temp < arr[j-1]; j --) {
            arr[j] = arr[j-1]
        }
        arr[j] = temp;
    }
}