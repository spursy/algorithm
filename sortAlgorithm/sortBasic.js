var randomClass = require('../util/getRandom')
var algorithmTest = require('../util/algorithmTest')
var selectionSort = require('./selectionSort')
var insertionSort = require('./insertionSort')
var mergeSort = require('./mergeSort')
var _ = require('lodash')

var randomSelection = randomClass.getIntRandom(10000, 2, 100000)
var randomInsertion = _.clone(randomSelection)
var randomInsertionCopy = _.clone(randomSelection)
var randomMergeSort = _.clone(randomSelection)

var result = algorithmTest.processTimeTest(selectionSort.selectionSort, randomSelection)
var resultCopy = algorithmTest.processTimeTest(insertionSort.insertionSort, randomInsertion)
var resultHigh = algorithmTest.processTimeTest(insertionSort.insertionSortHigh, randomInsertionCopy)
var resultMergeSort = algorithmTest.processTimeTest(mergeSort.mergeSort, randomMergeSort)


// console.log(resultCopy)



