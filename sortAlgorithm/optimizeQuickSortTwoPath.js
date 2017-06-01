exports.optimizeQuickSort = function (arr) {
    _quickSort(arr, 0, arr.length - 1);
}

function _quickSort(arr, left, right) {
   if (left >= right) return;
   var p = _partition2(arr, left, right);
   

   _quickSort(arr, left, p-1);
   _quickSort(arr, p+1, right);
}

function _partition2(arr, left, right) {
    var random = parseInt(Math.random() * (right - left) + left);
    [arr[left], arr[random]] = [arr[random], arr[left]];

    var i = left + 1, j = right;
    while(true) {
        while(i <= right && arr[left] > arr[i]) {
            i ++;
        }
        while(j >= left + 1 && arr[left] < arr[j]) {
            j --;
        }
        if (i >= j) break;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i ++;
        j --;
    }
    [arr[left], arr[j]] = [arr[j], arr[left]];
    return i;
}