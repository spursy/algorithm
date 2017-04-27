exports.quickSelectSort = function (arr) {
    quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, left, right) {
    if(left < right) {
        var temp = arr[left];
        var i = left;
        var j = right;
        while(i < j) {
            while (i < j && temp <= arr[j]) {
                j --;
            }
            if (i == j) break;
            arr[i++] = arr[j];
            while (i < j && temp > arr[i]) {
                i ++;     
            }
            if (i == j) break;
            arr[j--] = arr[i];
        }

        if (i == j)
            arr[i] = temp;      

        quickSort(arr, left, i-1);
        quickSort(arr, i+1, right);    
    }
}