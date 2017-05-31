exports.optimizeQuickSort = function (arr) {
    quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, left, right) {
    if(left < right) {
        var temp = arr[left];
        var i = left;
        var j = right;
        while(i < j) {
            // Get bigger one than temp from end
            while (i < j && temp <= arr[j]) {
                j --;
            }
            if (i == j) break;

            // Get smaller one than temp from begin
            while (i < j && temp >= arr[i]) {
                i ++;     
            }
            if (i == j) break;
            // change the value
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i ++, j--;
        }
        
        if (i == j)
            arr[i] = temp;      

        quickSort(arr, left, i-1);
        quickSort(arr, i+1, right);    
    }
}