var randomClass = require('../util/getRandom')
var algorithmTest = require('../util/algorithmTest')
var selectionSort = require('./selectionSort')
var insertionSort = require('./insertionSort')
var mergeSort = require('./mergeSort')
var _ = require('lodash')

// var randomSelection = randomClass.getIntRandom(10000, 2, 100000)
var randomSelection = randomClass.getNearlyOrderRandom(10, 2, 100000, 3)
console.log(randomSelection);

var randomInsertion = _.clone(randomSelection)
var randomInsertionCopy = _.clone(randomSelection)
var randomMergeSort = _.clone(randomSelection)

//seelction order 
var result = algorithmTest.processTimeTest(selectionSort.selectionSort, randomSelection)
// insert order
var resultCopy = algorithmTest.processTimeTest(insertionSort.insertionSort, randomInsertion)
//optimize insert order
var resultHigh = algorithmTest.processTimeTest(insertionSort.insertionSortHigh, randomInsertionCopy)
// merge order
var resultMergeSort = algorithmTest.processTimeTest(mergeSort.mergeSort, randomMergeSort)



