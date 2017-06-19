var insertionSortHigh = require('./insertionSort');

exports.optimizeQuickSort = function(arr) {
    var length = arr.length;
    _quickSort(arr, 0, length - 1); 
}

function _quickSort(arr, left, right) {
    if (left >= right) return;
    // if (right - left < 40)
    //     insertionSortHigh.insertionSortHigh(arr);

    var p = _partition(arr, left, right);
    _quickSort(arr, left, p-1);
    _quickSort(arr, p + 1, right);
}

function _partition(arr, left, right) {
    var random = parseInt(Math.random() * (right - left) + left);

    [arr[random], arr[left]] = [arr[left], arr[random]]
    // partition position.
    var i = left;
    // foreach cursor
    for(var j = left + 1;  j <= right; j ++) {
        if (arr[left] > arr[j]) {
            i ++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[left], arr[i]] = [arr[i], arr[left]];
    return i;
}