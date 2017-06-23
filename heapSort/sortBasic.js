var heapSort = require('./heapSort');
var verifyUtility = require('./verifySortOrder');
var randomClass = require('../utility/arrayUtility')


let arr = randomClass.getIntRandom(100, 1, 88888);
let sortArr = heapSort.heapSort(arr);
let isValid = verifyUtility.verifySortOrder(sortArr)
if (isValid) console.log('sortArr::' + sortArr);
