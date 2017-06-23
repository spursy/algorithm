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
        [arr[parseInt(k/2) - 1], arr[k - 1]] = [arr[k - 1], arr[parseInt(k/2) - 1]];
        k = parseInt(k/2);
    }
}

exports.removeTheBiggest = function(arr) {
    let length = arr.length;
    [arr[0], arr[length]] = [arr[length], arr[0]];
    arr.pop();
    shiftDown(arr);
    return arr;
}

function shiftDown(arr) {
    var length = arr.length;

    let k = 1;
    while(k <= arr.length + 1) {
        let biggerItem = arr[2*k - 1] > arr[2*k] ? arr[2*k - 1] : arr[2*k];
        if (biggerItem > arr[k]) {
            [biggerItem, arr[k]] = [arr[k], biggerItem];
            k =  arr[2*k] > arr[2*k + 1] ? 2*k : 2*k +1;
            continue;
        }
        else
            break;         
    }
}


