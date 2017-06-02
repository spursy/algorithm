var randomClass = require('../util/getRandom')
var algorithmTest = require('../util/algorithmTest')
var selectionSort = require('./selectionSort')
var insertionSort = require('./insertionSort')
var mergeSort = require('./mergeSort')
var optimizeMergeSort = require('./optimizeMergeSort')
var quickSort = require('./quickSort');
var optimizeQuickSort = require('./optimizeQuickSort');
var optimizeQuickSortTwoPath = require('./optimizeQuickSortTwoPath');
var optimizeQuickSortThreePath = require('./optimizeQuickSortThreePath');
var _ = require('lodash')

 var randomSelection = randomClass.getIntRandom(900000, 2, 9900000)
 var nearlyRandomSelection = randomClass.getNearlyOrderRandom(905000, 2, 9100000, 2, true)

// var randomInsertion = _.clone(randomSelection)
// var randomInsertionCopy = _.clone(randomSelection)
// var randomMergeSort = _.clone(randomSelection)
// var optimizeRandomMergeSort = _.clone(randomSelection)
// var randomQuickSelectSort = _.clone(randomSelection)

/**
 * seelction order 
 */
// console.log("selection order:::")
// var result = algorithmTest.processTimeTest(selectionSort.selectionSort, randomSelection)

/**
 * insertion order.
 */
// console.log("insertion order:::")
// var resultCopy = algorithmTest.processTimeTest(insertionSort.insertionSort, randomInsertion)
// console.log("optimize insertion order:::")
// var resultHigh = algorithmTest.processTimeTest(insertionSort.insertionSortHigh, randomInsertionCopy)

/**
 * merge order.
 */
// console.log("merge order:::")
// var resultMergeSort = algorithmTest.processTimeTest(mergeSort.mergeSort, randomMergeSort)

// optimize merge order
// console.log("optimize merge order:::")
// var resultMergeSort = algorithmTest.processTimeTest(optimizeMergeSort.optimizeMergeSort, optimizeRandomMergeSort)

// quickSelectSort
// var randomTemp = [2, 93, 24, 83];
// console.log('quick Select Sort:::')
// algorithmTest.processTimeTest(quickSelectSort.quickSelectSort, randomQuickSelectSort)

/**
 * quick sort.
 */
var quickSortSort = _.clone(randomSelection);
var quickSortSortForOptimize = _.clone(quickSortSort);
var quickSortSortForOptimize2 = _.clone(nearlyRandomSelection);
var quickSortSortForOptimize3 = _.clone(nearlyRandomSelection);


// console.log("Statrt ..........")
// console.log('quick sort function');
// algorithmTest.processTimeTest(quickSort.quickSort, quickSortSort, false);

// console.log("Statrt ..........")
// console.log('optimize quick sort function');
// algorithmTest.processTimeTest(optimizeQuickSort.optimizeQuickSort, quickSortSortForOptimize, false); 

// var data = [36, 8, 49,];
console.log('Start ..........');
console.log('optimize quick sort by two path');
algorithmTest.processTimeTest(optimizeQuickSortTwoPath.optimizeQuickSort, quickSortSortForOptimize2, false); 

// var data = [53, 8, 61, 36, 49];
console.log('Start ..........');
console.log('optimize quick sort by three path');
algorithmTest.processTimeTest(optimizeQuickSortThreePath.optimizeQuickSort, quickSortSortForOptimize3, false); 







