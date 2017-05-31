var randomClass = require('../util/getRandom')
var algorithmTest = require('../util/algorithmTest')
var selectionSort = require('./selectionSort')
var insertionSort = require('./insertionSort')
var mergeSort = require('./mergeSort')
var optimizeMergeSort = require('./optimizeMergeSort')
var quickSort = require('./quickSort');
var optimizeQuickSort = require('./optimizeQuickSort');
var optimizeQuickSortTwoPath = require('./optimizeQuickSortTwoPath');
var _ = require('lodash')

var randomSelection = randomClass.getIntRandom(100, 2, 100000000000000)
var nearlyRandomSelection = randomClass.getNearlyOrderRandom(10000, 2, 1000, 3)

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
quickSortSortForOptimize2 = _.clone(nearlyRandomSelection);

console.log("Statrt ..........")
console.log('quick sort function');
algorithmTest.processTimeTest(quickSort.quickSort, quickSortSort, false);

console.log("Statrt ..........")
console.log('optimize quick sort function');
algorithmTest.processTimeTest(optimizeQuickSort.optimizeQuickSort, quickSortSortForOptimize, false); 

console.log('Start ..........');
console.log('optimize quick sort by two path');
algorithmTest.processTimeTest(optimizeQuickSortTwoPath.optimizeQuickSort, quickSortSortForOptimize2); 







