exports.verifySortOrder = function(arr) {
    var length = arr.length;
    for (var index = 1; index < parseInt(length/2); index++){
        if (arr[index-1] < arr[2 * index -1] || arr[index-1] < arr[2 * index]) {
            console.log('Noted error sort.');
            return false;
        }

        return true;
    }
}