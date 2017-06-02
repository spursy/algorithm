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

var randomSelection = randomClass.getIntRandom(5, 2, 1000)
var nearlyRandomSelection = randomClass.getNearlyOrderRandom(10000, 2, 1000, 2, true)

var randomInsertion = _.clone(randomSelection)
var randomInsertionCopy = _.clone(randomSelection)
var randomMergeSort = _.clone(randomSelection)
var optimizeRandomMergeSort = _.clone(randomSelection)
var randomQuickSelectSort = _.clone(randomSelection)

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
var quickSortSort = _.clone(nearlyRandomSelection);
var quickSortSortForOptimize = _.clone(nearlyRandomSelection);
var quickSortSortForOptimize2 = _.clone(randomSelection);
var quickSortSortForOptimize3 = _.clone(randomSelection);


// console.log("Statrt ..........")
// console.log('quick sort function');
// algorithmTest.processTimeTest(quickSort.quickSort, quickSortSort, false);
var data1 = [866, 880,227,385,456];
console.log("Statrt ..........")
console.log('optimize quick sort function');
algorithmTest.processTimeTest(optimizeQuickSort.optimizeQuickSort, data1, true); 

// var data = [866, 880,227,385,456];
// console.log('Start ..........');
// console.log('optimize quick sort by two path');
// algorithmTest.processTimeTest(optimizeQuickSortTwoPath.optimizeQuickSort, data, true); 

// console.log('Start ..........');
// console.log('optimize quick sort by three path');
// algorithmTest.processTimeTest(optimizeQuickSortThreePath.optimizeQuickSort, quickSortSortForOptimize3, true); 







