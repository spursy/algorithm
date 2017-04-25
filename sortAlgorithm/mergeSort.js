var _ = require('lodash')
var insertionSort = require('./insertionSort')

exports.mergeSort = function(arr) {
    var length = arr.length;
    _mergeSort(arr, 0, length - 1)
}

function _mergeSort(arr, left, right) {
    if (right - left <= 0)  return;
    else (right - left <= 20 )
        insertionSort.insertionSortHigh(arr);

    var middle = parseInt((right + left) / 2);
    _mergeSort(arr, left, middle);
    _mergeSort(arr, middle+1, right);
    //Optimize the performance.
    if (arr[middle] < arr[middle + 1])
        _merge(arr, middle, left, right);
}

function _merge(arr, middle, left, right) {    
    // var copyArr = _.clone(arr)
    var copyArr = new Array()
    for (var index = left; index <= right; index ++) {
        copyArr.push(arr[left])
    }

    var i = left, j = middle+1;
    for(var k = left; k <= right; k ++) {
        if (i > middle) {
            arr[k] = copyArr[j-left];
            j ++;
        } else if (j > right ) {
            arr[k] = copyArr[i-left];
            i ++;
        } else if (copyArr[i-left] < copyArr[j-left]) {
            arr[k] = copyArr[i-left]; 
            i ++;
        } else {
            arr[k] = copyArr[j];
            j ++;
        }
    }   
}