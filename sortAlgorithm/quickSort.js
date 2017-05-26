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
    var j = left;
    for(var i = left + 1; i <= right; i ++) {
        if (arr[i] < v) {
            [arr[j + 1], arr[i]] = [arr[i], arr[j+1]];
            j ++;
        }
    }
    [arr[left], arr[j]] = [arr[j], arr[left]];
    return j;
}