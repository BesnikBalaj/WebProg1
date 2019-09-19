const arrayUtils = require("./arrayUtils.js");
const stringUtils = require("./stringUtils.js");
const objUtils = require("./objUtils.js");

//------------------------------------------------------------HEAD TESTS
console.log();
console.log("head tests:");
try{
	//should pass
	const headOne = arrayUtils.head([2,3,4]);
	console.log("\x1b[45m\x1b[34m\x1b[4m%s",headOne);
	console.log("head passed successfully");
}
catch(e){
	console.error("head failed test case");
}

try{
	//should fail
	const headTwo = arrayUtils.head(1234);
	console.error("head did not error");
}
catch(e){
	console.log("head failed successfully");
}

try{
	//should fail
	const headThree = arrayUtils.head([]);
	console.error("head did not error");
}
catch(e){
	console.log("head failed successfully");
}

try{
	//should fail
	const headFour = arrayUtils.head("apple");
	console.error("head did not error");
}
catch(e){
	console.log("head failed successfully");
}

try{
	//should fail
	const headFive = arrayUtils.head();
	console.error("head did not error");
}
catch(e){
	console.log("head failed successfully");
}

//------------------------------------------------------------LAST TESTS
console.log();
console.log("last tests:");
try{
	//should pass
	const lastOne = arrayUtils.last([1,2,3]);
	console.log(lastOne);
	console.log("last passed successfully");
}
catch(e){
	console.error("last failed test case");
}

try{
	//should fail
	const lastTwo = arrayUtils.last(1234);
	console.error("last did not error");
}
catch(e){
	console.log("last failed successfully");
}

try{
	//should fail
	const lastThree = arrayUtils.last([]);
	console.error("last did not error");
}
catch(e){
	console.log("last failed successfully");
}

try{
	//should fail
	const lastFour = arrayUtils.last("apple");
	console.error("last did not error");
}
catch(e){
	console.log("last failed successfully");
}

try{
	//should fail
	const lastFive = arrayUtils.last();
	console.error("last did not error");
}
catch(e){
	console.log("last failed successfully");
}

//------------------------------------------------------------REMOVE TESTS
console.log();
console.log("remove tests:");
try{
	//should pass
	const removeOne = arrayUtils.remove([5,6,7],1);
	console.log(removeOne);
	console.log("remove passed successfully");
}
catch(e){
	console.error("remove failed test case");
}

try{
	//should fail
	const removeTwo = arrayUtils.remove(1234,1);
	console.error("remove did not error");
}
catch(e){
	console.log("remove failed successfully");
}

try{
	//should fail
	const removeThree = arrayUtils.remove([1,2,3]);
	console.error("remove did not error");
}
catch(e){
	console.log("remove failed successfully");
}

try{
	//should fail
	const removeThree = arrayUtils.remove("apple",1);
	console.error("remove did not error");
}
catch(e){
	console.log("remove failed successfully");
}

try{
	//should fail
	const removeThree = arrayUtils.remove();
	console.error("remove did not error");
}
catch(e){
	console.log("remove failed successfully");
}

//------------------------------------------------------------RANGE TESTS
console.log();
console.log("range tests:");
try{
	//should pass
	const rangeOne = arrayUtils.range(4);
	console.log(rangeOne);
	console.log("range passed successfully");
}
catch(e){
	console.error("range failed test case");
}

try{
	//should pass
	const rangeTwo = arrayUtils.range(4,"hi");
	console.log("range passed successfully");
}
catch(e){
	console.error("range failed test case");
}

try{
	//should fail
	const rangeThree = arrayUtils.range("apple");
	console.error("range did not error");
}
catch(e){
	console.log("range failed successfully");
}

try{
	//should fail
	const rangeFour = arrayUtils.range("apple", 1);
	console.error("range did not error");
}
catch(e){
	console.log("range failed successfully");
}

try{
	//should fail
	const rangeFive = arrayUtils.range();
	console.error("range did not error");
}
catch(e){
	console.log("range failed successfully");
}

//------------------------------------------------------------COUNTELEMENTS TESTS
console.log();
console.log("countElements tests:");
try{
	//should pass
	const countElementsOne = arrayUtils.countElements([13, '13', 13, 'hello', true, 'true']);
	console.log(countElementsOne);
	console.log("countElements passed successfully");
}
catch(e){
	console.error("countElements failed test case");
}

try{
	//should fail
	const countElementsTwo = arrayUtils.countElements(1234);
	console.error("countElements did not error");
}
catch(e){
	console.log("countElements failed successfully");
}

try{
	//should pass
	const countElementsThree = arrayUtils.countElements([]);
	console.log("countElements passed successfully");
}
catch(e){
	console.error("countElements failed test case");
}

try{
	//should fail
	const countElementsFour = arrayUtils.countElements("apple");
	console.error("countElements did not error");
}
catch(e){
	console.log("countElements failed successfully");
}

try{
	//should fail
	const countElementsFive = arrayUtils.countElementsTwo();
	console.error("countElements did not error");
}
catch(e){
	console.log("countElements failed successfully");
}

//------------------------------------------------------------ISEQUAL TESTS
console.log();
console.log("isEqual tests:");
try{
	//should pass
	const isEqualOne = arrayUtils.isEqual([1,2,3],[1,2,3]);
	console.log(isEqualOne);
	console.log("isEqual passed successfully");
}
catch(e){
	console.error("isEqual failed test case");
}

try{
	//should pass
	const isEqualTwo = arrayUtils.isEqual([],[]);
	console.log("isEqual passed successfully");
}
catch(e){
	console.error("isEqual failed test case");
}

try{
	//should fail
	const isEqualThree = arrayUtils.isEqual("apple", 1);
	console.error("isEqual did not error");
}
catch(e){
	console.log("isEqual failed successfully");
}

try{
	//should fail
	const isEqualFour = arrayUtils.isEqual();
	console.error("isEqual did not error");
}
catch(e){
	console.log("isEqual failed successfully");
}

try{
	//should fail
	const isEqualFive = arrayUtils.isEqual([]);
	console.error("isEqual did not error");
}
catch(e){
	console.log("isEqual failed successfully");
}

//------------------------------------------------------------CAPITALIZE TESTS
console.log();
console.log("capitalize tests:");
try{
	//should pass
	const capitalizeOne = stringUtils.capitalize("hELLO, world123");
	console.log(capitalizeOne);
	console.log("capitalize passed successfully");
}
catch(e){
	console.error("capitalize failed test case");
}

try{
	//should fail
	const capitalizeTwo = stringUtils.capitalize(1234);
	console.error("capitalize did not error");
}
catch(e){
	console.log("capitalize failed successfully");
}

try{
	//should pass
	const capitalizeThree = stringUtils.capitalize("");
	console.log("capitalize passed successfully");
}
catch(e){
	console.error("capitalize failed test case");
}

try{
	//should fail
	const capitalizeFour = stringUtils.capitalize();
	console.error("capitalize did not error");
}
catch(e){
	console.log("capitalize failed successfully");
}

try{
	//should fail
	const capitalizeFive = stringUtils.capitalize(["hello, world"]);
	console.error("capitalize did not error");
}
catch(e){
	console.log("capitalize failed successfully");
}

//------------------------------------------------------------REPEAT TESTS
console.log();
console.log("repeat tests:");
try{
	//should pass
	const repeatOne = stringUtils.repeat("abc",0);
	console.log(repeatOne);
	console.log("repeat passed successfully");
}
catch(e){
	console.error("repeat failed test case");
}

try{
	//should fail
	const repeatTwo = stringUtils.repeat("abc","abc");
	console.error("repeat did not error");
}
catch(e){
	console.log("repeat failed successfully");
}

try{
	//should pass
	const repeatThree = stringUtils.repeat("",0);
	console.log("repeat passed successfully");
}
catch(e){
	console.error("repeat failed test case");
}

try{
	//should fail
	const repeatFour = stringUtils.repeat("abc",-1);
	console.error("repeat did not error");
}
catch(e){
	console.log("repeat failed successfully");
}

try{
	//should fail
	const repeatFive = stringUtils.repeat(["abc"],2);
	console.error("repeat did not error");
}
catch(e){
	console.log("repeat failed successfully");
}

//------------------------------------------------------------COUNTCHARS TESTS
console.log();
console.log("countChars tests:");
try{
	//should pass
	const countCharsOne = stringUtils.countChars("Hello, the pie is in the oven");
	console.log(countCharsOne);
	console.log("countChars passed successfully");
}
catch(e){
	console.error("countChars failed test case");
}

try{
	//should fail
	const countCharsTwo = stringUtils.countChars(1234);
	console.error("countChars did not error");
}
catch(e){
	console.log("countChars failed successfully");
}

try{
	//should fail
	const countCharsThree = stringUtils.countChars([]);
	console.error("countChars did not error");
}
catch(e){
	console.log("countChars failed successfully");
}

try{
	//should pass
	const countCharsOne = stringUtils.countChars("");
	console.log("countChars passed successfully");
}
catch(e){
	console.error("countChars failed test case");
}

try{
	//should fail
	const countCharsFive = stringUtils.countChars();
	console.error("countChars did not error");
}
catch(e){
	console.log("countChars failed successfully");
}

//------------------------------------------------------------EXTEND TESTS
console.log();
console.log("extend tests:");
const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };
const fourth = undefined;
try{
	//should pass
	const extendOne = objUtils.extend(first,second,third);
	console.log(extendOne);
	console.log("extend passed successfully");
}
catch(e){
	console.error("extend failed test case");
}

try{
	//should fail
	const extendTwo = objUtils.extend(first);
	console.error("extend did not error");
}
catch(e){
	console.log("extend failed successfully");
}

try{
	//should fail
	const extendThree = objUtils.extend(first,fourth);
	console.error("extend did not error");
}
catch(e){
	console.log("extend failed successfully");
}

try{
	//should fail
	const extendFour = objUtils.extend();
	console.error("extend did not error");
}
catch(e){
	console.log("extend failed successfully");
}

try{
	//should fail
	const extendFive = objUtils.extend("first","second");
	console.error("extend did not error");
}
catch(e){
	console.log("extend failed successfully");
}

//------------------------------------------------------------SMUSH TESTS
console.log();
console.log("smush tests:");
try{
	//should pass
	const smushOne = objUtils.smush(first,second,third);
	console.log(smushOne);
	console.log("smush passed successfully");
}
catch(e){
	console.error("smush failed test case");
}

try{
	//should fail
	const smushTwo = objUtils.smush(first);
	console.error("smush did not error");
}
catch(e){
	console.log("smush failed successfully");
}

try{
	//should fail
	const smushThree = objUtils.smush();
	console.error("smush did not error");
}
catch(e){
	console.log("smush failed successfully");
}

try{
	//should fail
	const smushFour = objUtils.smush(first, fourth);
	console.error("smush did not error");
}
catch(e){
	console.log("smush failed successfully");
}

try{
	//should fail
	const smushFive = objUtils.smush("first", "second");
	console.error("smush did not error");
}
catch(e){
	console.log("smush failed successfully");
}

//------------------------------------------------------------MAPVALUES TESTS
console.log();
console.log("mapValues tests:");
try{
	//should pass
	const mapValuesOne = objUtils.mapValues({ a: 1, b: 2, c: 3 }, n => n + 1);
	console.log(mapValuesOne);
	console.log("mapValues passed successfully");
}
catch(e){
	console.error("mapValues failed test case");
}

try{
	//should fail
	const mapValuesTwo = objUtils.mapValues({ a: 1}, "function");
	console.error("mapValues did not error");
}
catch(e){
	console.log("mapValues failed successfully");
}

try{
	//should fail
	const mapValuesThree = objUtils.mapValues();
	console.error("mapValues did not error");
}
catch(e){
	console.log("mapValues failed successfully");
}

try{
	//should fail
	const mapValuesFour = objUtils.mapValues("object", n => n + 1);
	console.error("mapValues did not error");
}
catch(e){
	console.log("mapValues failed successfully");
}

try{
	//should fail
	const mapValuesFive = objUtils.mapValues(1, n => n + 1);
	console.error("mapValues did not error");
}
catch(e){
	console.log("mapValues failed successfully");
}