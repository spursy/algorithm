var heapSort = require('./heapSort');
var verifyUtility = require('./verifySortOrder');
var randomClass = require('../utility/arrayUtility')


let arr = randomClass.getIntRandom(100, 1, 88888);
let arrDemo = [5, 19, 4, 20, 8, 31];
let sortArr = heapSort.heapSort(arrDemo);
let isValid = verifyUtility.verifySortOrder(sortArr)
if (isValid) console.log('sortArr::' + sortArr);

let sortArr2 = heapSort.removeTheBiggest(sortArr);
console.log('sortArr::' + sortArr2);


