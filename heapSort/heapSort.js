exports.heapSort = function(arr){
    let sortArrr = new Array();
    arr.forEach(function(item) {
        insertItem(sortArrr, item);
    }, this);
    
    return sortArrr;
}

function insertItem(arr, item) {
    arr.push(item);
    shiftUp(arr);
}

function shiftUp(arr) {
    var k = arr.length;    
    while(parseInt(k/2) - 1 >= 0 && arr[parseInt(k/2) - 1] < arr[k-1]) {
        console.log(";;"+ arr[parseInt(k/2)]);
        console.log("::"+ arr[parseInt(k)]);
        [arr[parseInt(k/2), arr[k]]] = [arr[k], arr[parseInt(k/2)]];
        k = parseInt(k/2);
    }
}


