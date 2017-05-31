exports.processTimeTest = function (testFunction, arr, disPlayResult) {
    var startTime = new Date().getTime();
    var result = testFunction(arr);
    var endTime = new Date().getTime();
    var interval = (endTime - startTime)/ 1000;
    console.log("Processed date time is " + interval);

    // console.log(arr)
    try {
        verifyDecreaseSort(arr);
    }
    catch(e) {
        console.log("decrease sort function is not right.")
    }
    if (disPlayResult === undefined || disPlayResult)
        console.log(arr);
    console.log('End ...........');
    process.stdout.write('\n');
    return result;
} 

function verifyDecreaseSort (arr) {
    var length = arr.length;
    for (var i = 0; i < length; i ++) {
        if (arr[i] > arr[i + 1]) 
        throw Error("verifyDecreaseSort", "decrease sort function is not right.");
    }
}