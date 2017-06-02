exports.optimizeQuickSort = function (arr) {
    var length = arr.length;
    _quickSort(arr, 0, length - 1);
}

function _quickSort(arr, left, right) {
    if (left >= right) return;
    
    var position = _partition(arr, left, right);
    _quickSort(arr, left, position.lt-1);
    _quickSort(arr, position.mt + 1, right);
}

function _partition(arr, left, right) {
    var lt = left + 1;
    var mt = right;
    var i = left + 1;
    while(i <= mt) {
        if (arr[i] < arr[left]) {  
            if (i !== lt)      
                [arr[i], arr[lt]] = [arr[lt], arr[i]]; 
            lt ++;
            i ++;
        } else if (arr[i] > arr[left]) {
            if (i !== mt)
                [arr[i], arr[mt]] = [arr[mt], arr[i]];
            mt --;           
        } else {
            i ++;
        }
    }

    if (left !== mt)
        [arr[left], arr[mt]] = [arr[mt], arr[left]];
    return {
        lt: lt,
        mt: mt
    }
}