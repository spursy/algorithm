exports.optimizeQuickSort = function (arr) {
    var length = arr.length;
    _quickSort(arr, 0, length);
}

function _quickSort(arr, left, right) {
    if (left >= right) return;

    var lt = left + 1;
    var mt = right;
    var i = left + 1;
    while(i < mt) {
        if (arr[i] > arr[left]) {
            [arr[i], arr[lt]] = [arr[lt], arr[i]];
            lt ++;
            i ++;
        } else if (arr[i] < arr[left]) {
            [arr[i], arr[mt]] = [arr[mt], arr[i]];
            mt --;
            i ++
        } else {
            i ++;
        }
    }

    [arr[left], arr[lt]] = [arr[lt], arr[left]];

    _quickSort(arr, left, lt-1);
    _quickSort(arr, mt, right);
}