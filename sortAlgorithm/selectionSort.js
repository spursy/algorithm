exports.selectionSort = function (arr) {
    var length = arr.length;
    for (i = 0; i < length; i ++) {
        var minIndex  = i;
        for(var j = i + 1; j < length; j ++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }           
        }
         var temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr
}