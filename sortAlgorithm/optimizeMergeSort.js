var _ = require('lodash');
// var util = require('../util/util');

exports.optimizeMergeSort = function (arr) {
    var length = arr.length;
    _mergeSort(arr, 0, length - 1);
}

function _mergeSort(arr, left, right) {
    if (right - left <= 0)  return;
    // else if (right - left < 20) {
    //     insertionSortHigh(arr, left, right);
    //     return;
    // }

    var middle = parseInt((right + left) / 2);
    _mergeSort(arr, left, middle);
    _mergeSort(arr, middle + 1, right);

    // Optimize point
    if (arr[middle] > arr[middle + 1])
        _merge(arr, left, middle, right);
}

function _merge(arr, left, middle, right) {
    var copyArr = new Array (); 
    for (var i = left; i <= right; i++) {
        copyArr.push(arr[i]);
    }

    var i = 0, j = middle + 1 - left;
    for (var k = left; k <= right; k++) {
        if (i > middle - left) {
            arr[k] = copyArr[j];
            j ++;
        } else if (j > right - left) {
            arr[k] = copyArr[i];
            i ++;
        }
        else if (copyArr[i] > copyArr[j]) {
            arr[k] = copyArr[j];
            j ++;
        } else {
            arr[k] = copyArr[i];
            i ++;
        }
    }
}

/**
* if current data is less than previous,
 * do not change the position immediately.
 *  Only change previous to current one.
 */
insertionSortHigh = function (arr, left, right) {
    for (var i = left; i <= right; i ++) {
        var temp = arr[i + 1]
        var j = i+1;
        for (; j > 0 && temp < arr[j-1]; j --) {
            arr[j] = arr[j-1]
        }
        arr[j] = temp;
    }
}