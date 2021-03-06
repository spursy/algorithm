var _ = require('lodash');
// var util = require('../util/util');
var insertionSort = require('./insertionSort');

exports.mergeSort = function (arr) {
    var length = arr.length;
    _mergeSort(arr, 0, length - 1);
}

function _mergeSort(arr, left, right) {
    if (right - left <= 0)  return;
    else if (right - left < 100) {
        insertionSortHigh(arr, left, right)
    }

    var middle = parseInt((right + left) / 2);
    _mergeSort(arr, left, middle);
    _mergeSort(arr, middle + 1, right);

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

