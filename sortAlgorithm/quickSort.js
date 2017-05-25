exports.quickSort = function (arr) {
    var length = arr.length;
    _quickSort(arr, 0, length - 1);
}

function _quickSort(arr, left, right) {
    if (left >= right) return;
    var p = _partition(arr, left, right);
    _quickSort(arr, left, p - 1);
    _quickSort(arr, p + 1, right);
}

function _partition(arr, left, right) {
    var v = arr[left];
    var j = l;
    for(var i = left + 1; i <= right; i ++) {
        if (arr[i] < v) {
            swap(arr[j + 1], arr[i]);
            j ++;
        }
    }
    swap(arr[l], arr[j]);
    return j;
}