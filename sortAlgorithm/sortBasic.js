var randomClass = require('../util/getRandom')
var algorithmTest = require('../util/algorithmTest')
var selectionSort = require('./selectionSort')
var insertionSort = require('./insertionSort')
var mergeSort = require('./mergeSort')
var optimizeMergeSort = require('./optimizeMergeSort')
var quickSelectSort = require('./quickSelectSort');
var _ = require('lodash')

var randomSelection = randomClass.getIntRandom(10000000, 2, 100000000000000)
// var randomSelection = randomClass.getNearlyOrderRandom(10, 2, 100000, 3)
console.log(randomSelection);

var randomInsertion = _.clone(randomSelection)
var randomInsertionCopy = _.clone(randomSelection)
var randomMergeSort = _.clone(randomSelection)
var optimizeRandomMergeSort = _.clone(randomSelection)
var randomQuickSelectSort = _.clone(randomSelection)

// //seelction order 
// console.log("selection order:::")
// var result = algorithmTest.processTimeTest(selectionSort.selectionSort, randomSelection)
// // insert order
// console.log("insertion order:::")
// var resultCopy = algorithmTest.processTimeTest(insertionSort.insertionSort, randomInsertion)
// //optimize insert order
// console.log("optimize insertion order:::")
// var resultHigh = algorithmTest.processTimeTest(insertionSort.insertionSortHigh, randomInsertionCopy)
// merge order
// console.log("merge order:::")
// var resultMergeSort = algorithmTest.processTimeTest(mergeSort.mergeSort, randomMergeSort)

// optimize merge order
console.log("optimize merge order:::")
var resultMergeSort = algorithmTest.processTimeTest(optimizeMergeSort.optimizeMergeSort, optimizeRandomMergeSort)

// quickSelectSort
// var randomTemp = [2, 93, 24, 83];
console.log('quick Select Sort:::')
algorithmTest.processTimeTest(quickSelectSort.quickSelectSort, randomQuickSelectSort)





