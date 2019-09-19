const lab2 = require("./arrayUtils");
const lab2_2 = require("./stringUtils");
const lab2_3 = require("./objUtils");

try {
  //should pass
   const headOne = lab2.head([2, 3, 4]);
   console.log('head passed successfully');
} catch (e) {
   console.error('head failed test case');
}

try {
  //should pass
   const headOne_one = lab2.head([5, 3, 4]);
   console.log('head passed successfully');
} catch (e) {
   console.error('head failed test case');
}


try {
  //should fail
   const headTwo = lab2.head();
   console.log('head passed successfully');
} catch (e) {
   console.error('head failed test case');
}

try {
  //should fail
   const headThree = lab2.head('Bananana');
   console.log('head passed successfully');
} catch (e) {
   console.error('head failed test case');
}

try {
  //should fail
   const headFour = lab2.head([]);
   console.log('head passed successfully');
} catch (e) {
   console.error('head failed test case');
}
//////////////////////////////////////////////////
try {
  //should pass
   const lastOne = lab2.last([2, 3, 4]);
   console.log('last passed successfully');
} catch (e) {
   console.error('last failed test case');
}

try {
  //should fail
   const lastOne = lab2.last();
   console.log('last passed successfully');
} catch (e) {
   console.error('last failed test case');
}
/////////////////////////////////////////////////
try {
  //should pass
   const removeOne = lab2.remove([2, 3, 4],2);
   //console.log(removeOne);
   console.log('remove passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('remove failed test case');
}

try {
  //should fail
   const removeTwo = lab2.remove();
   //console.log(removeOne);
   console.log('remove passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('remove failed test case');
}

try {
  //should f
   const removeThree = lab2.remove([2, 3, 4],5);
   //console.log(removeOne);
   console.log('remove passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('remove failed test case');
}

try {
  //should f
   const removeFour = lab2.remove([2, 3, 4],-2);
   //console.log(removeOne);
   console.log('remove passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('remove failed test case');
}

try
{
  //should pass
   const removeFive = lab2.remove([2, 3, 4],1);
   //console.log(removeFive);
   console.log('remove passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('remove failed test case');
}
/////////////////////////////////////////////////
try {
  //should pass
   const rangeOne = lab2.range(5,2);
   //console.log(rangeOne);
   console.log('range passed successfully');
} catch (e) {
   //console.log(e)
   console.error('range failed test case');
}

try {
  //should pass
   const rangeTwo = lab2.range(5,);
   //console.log(rangeTwo);
   console.log('range passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('range failed test case');
}

try {
  //should pass
   const rangeThree = lab2.range(5,undefined);
   //console.log(rangeThree);
   console.log('range passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('range failed test case');
}

try {
  //should fail
   const rangeFour = lab2.range(-5,undefined);
   //console.log(rangeFour);
   console.log('range passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('range failed test case');
}

try {
  //should fail
   const rangeFive = lab2.range([],undefined);
   //console.log(rangeFive);
   console.log('range passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('range failed test case');
}

try {
  //should fail
   const rangeFive = lab2.range([5,6],undefined);
   //console.log(rangeFive);
   console.log('range passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('range failed test case');
}

try {
  //should fail
   const rangeSix = lab2.range([5,6,7]);
   console.log(rangeFive);
   console.log('range passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('range failed test case');
}
try {
  //should fail
   const rangeSeven = lab2.range('Strings');
   //console.log(rangeFive);
   console.log('range passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('range failed test case');
}

try {
  //should fail
   const rangeEight = lab2.range([5]);
   console.log(rangeEight);
   console.log('range passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('range failed test case');
}

try {
  //should fail
   const rangeNine = lab2.range();
   console.log(rangeNine);
   console.log('range passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('range failed test case');
}

try {
  //should fail
   const rangeTen = lab2.range(2.5);
   console.log(rangeTen);
   console.log('range passed successfully');
} catch (e) {
   console.log(e)
   console.error('range failed test case');
}
///////////////////////////////////////////////
try {
  //should pass
   const countOne = lab2.countElements(['Rawr',1,'hi']);
   console.log(countOne);
   console.log('count passed successfully');
} catch (e) {
   //console.log(e)
   console.error('count failed test case');
}

try {
  //should pass
   const countTwo = lab2.countElements(['Rawr','Rawr','hi']);
   console.log(countTwo);
   console.log('count passed successfully');
} catch (e) {
   //console.log(e)
   console.error('count failed test case');
}
try {
  //should pass
   const countThree = lab2.countElements(['Rawr','Rawr']);
   console.log(countThree);
   console.log('count passed successfully');
} catch (e) {
   //console.log(e)
   console.error('count failed test case');
}

try {
  //should pass
   const countFour = lab2.countElements(['Rawr']);
   console.log(countFour);
   console.log('count passed successfully');
} catch (e) {
   //console.log(e)
   console.error('count failed test case');
}

try {
  //should pass
   const countFive = lab2.countElements([]);
   console.log(countFive);
   console.log('count passed successfully');
} catch (e) {
   //console.log(e)
   console.error('count failed test case');
}

try {
  //should pass
   const countSix = lab2.countElements([1,2,3,4,5,6,7,7,8]);
   //console.log(countSix);
   console.log('count passed successfully');
} catch (e) {
   //console.log(e)
   console.error('count failed test case');
}
try {
  //should pass
   const countSix = lab2.countElements();
   //console.log(countSix);
   console.log('count passed successfully');
} catch (e) {
   //console.log(e)
   console.error('count failed test case');
}
/////////////////////////////////////////////////
try {
  //should be true
   const equalOne = lab2.isEqual([1,2,3,4,5,6,7,7,8],[1,2,3,4,5,6,7,7,8]);
   //console.log(equalOne);
   console.log('equal passed successfully');
} catch (e) {
   //console.log(e)
   console.error('equal failed test case');
}

try {
  //should be false
   const equalTwo = lab2.isEqual([1,2,3,4,5,6,7,7],[1,2,3,4,5,6,7,7,8]);
   console.log(equalTwo);
   console.log('equal passed successfully');
} catch (e) {
   //console.log(e)
   console.error('equal failed test case');
}

try {
  //should be false
   const equalThree = lab2.isEqual([1,2,3,4,5,6,7,7,8]);
   //console.log(equalOne);
   console.log('equal passed successfully');
} catch (e) {
   //console.log(e)
   console.error('equal failed test case');
}

try {
  //should fail
   const equalFour = lab2.head();
   console.log('equal passed successfully');
} catch (e) {
   console.error('equal failed test case');
}

////////////////////////////////////////////////
try {
  //should pass
   const captOne = lab2_2.capitalize('_123 string');
   //console.log(captOne);
   console.log('capt passed successfully');
} catch (e) {
   //console.log(e)
   console.error('capt failed test case');
}

try {
  //should fail
   const captTwo = lab2_2.capitalize();
   //console.log(captOne);
   console.log('capt passed successfully');
} catch (e) {
   //console.log(e)
   console.error('capt failed test case');
}

try {
  //should pass
   const captThree = lab2_2.capitalize(5);
   //console.log(captOne);
   console.log('capt passed successfully');
} catch (e) {
   //console.log(e)
   console.error('capt failed test case');
}

try {
  //should f
   const captFour = lab2_2.capitalize([5,6,7]);
   //console.log(captOne);
   console.log('capt passed successfully');
} catch (e) {
   //console.log(e)
   console.error('capt failed test case');
}

try {
  //should f
   const captFive = lab2_2.capitalize(['string']);
   //console.log(captOne);
   console.log('capt passed successfully');
} catch (e) {
   //console.log(e)
   console.error('capt failed test case');
}

try {
  //should
   const captSix = lab2_2.capitalize('BOO');
   //console.log(captSix);
   console.log('capt passed successfully');
   console.log(captSix)
} catch (e) {
   //console.log(e)
   console.error('capt failed test case');
}

try {
  //should
   const captSeven = lab2_2.capitalize('BoOoOoOoB');
   //console.log(captSix);
   console.log('capt passed successfully');
   console.log(captSeven)
} catch (e) {
   //console.log(e)
   console.error('capt failed test case');
}

try {
  //should
   const captEight = lab2_2.capitalize('');
   console.log(captEight);
   console.log('capt passed successfully');
  // console.log(captEight)
} catch (e) {
   console.log(e)
   console.error('capt failed test case');
}
//////////////////////////////////////////////
try {
  //should pass
   const repeatOne = lab2_2.repeat('_123 string',3);
   //console.log(repeatOne);
   console.log('repeat passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('repeat failed test case');
}

try {
  //should pass
   const repeatTwo = lab2_2.repeat('_123 string',-3);
   //console.log(repeatOne);
   console.log('repeat passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('repeat failed test case');
}

try {
  //should pass
   const repeatThree = lab2_2.repeat('_123 string');
   //console.log(repeatOne);
   console.log('repeat passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('repeat failed test case');
}

try {
  //should pass
   const repeatFour = lab2_2.repeat('RAWR',7);
   //console.log(repeatFour);
   console.log('repeat passed successfully');
} catch (e) {
   //onsole.log(e)
   console.error('repeat failed test case');
}
///////////////////////////////////////////
try {
  //should fail
   const cCharsOne = lab2_2.countChars('_123 string');
   //console.log(cCharsOne);
   console.log('cChars passed successfully');
} catch (e) {
   //console.log(e)
   console.error('cChars failed test case');
}

try {
  //should fail
   const cCharsTwo = lab2_2.countChars(5);
   //console.log(cCharsOne);
   console.log('cChars passed successfully');
} catch (e) {
   //console.log(e)
   console.error('cChars failed test case');
}

try {
  //should fail
   const cCharsThree = lab2_2.countChars();
   //console.log(cCharsOne);
   console.log('cChars passed successfully');
} catch (e) {
   //console.log(e)
   console.error('cChars failed test case');
}
///////////////////////////////////////////////
try {
   const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = { x: 0, y: 9, q: 10 };
  //should fail
   const extendOne = lab2_3.extend(first,second,third);
   //console.log(extendOne);
   console.log('extend passed successfully');
} catch (e) {
   console.log(e)
   console.error('extend failed test case');
}

try {
   //const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = { x: 0, y: 9, q: 10 };
   const fourth = undefined;
  //should fail
   const extendTwo = lab2_3.extend(second,third);
   //console.log(extendTwo);
   console.log('extend passed successfully');
} catch (e) {
   console.log(e)
   console.error('extend failed test case');
}

try {
   //const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = { x: 0, y: 9, q: 10 };
  //should fail
   const extendThree = lab2_3.extend(third);
   //console.log(extendTwo);
   console.log('extend passed successfully');
} catch (e) {
   //console.log(e)
   console.error('extend failed test case');
}

try {
   //const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = [{ x: 0, y: 9, q: 10 }];
  //should fail
   const extendFour = lab2_3.extend(third);
   //console.log(extendTwo);
   console.log('extend passed successfully');
} catch (e) {
   //console.log(e)
   console.error('extend failed test case');
}

try {
   //const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = {};
  //should fail
   const extendFive = lab2_3.extend(second,third);
   console.log(extendFive);
   console.log('extend passed successfully');
} catch (e) {
   //console.log(e)
   console.error('extend failed test case');
}

try {
   //const first = { x: 2, y: 3};
   const second = {};
   const third = {};
  //should fail
   const extendSix = lab2_3.extend(second,third);
   console.log(extendSix);
   console.log('extend passed successfully');
} catch (e) {
   //console.log(e)
   console.error('extend failed test case');
}

try {
   //const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = { x: 0, y: 9, q: 10 };
   const fourth = undefined;
  //should fail
   const extendSeven = lab2_3.extend(second,fourth);
   //console.log(extendTwo);
   console.log('extend passed successfully');
} catch (e) {
   console.log(e)
   console.error('extend failed test case');
}

////////////////////////////////////////////
try {
   const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = { x: 0, y: 9, q: 10 };
  //should fail
   const smushOne = lab2_3.smush(second,third);
   //console.log(smushOne);
   console.log('smush passed successfully');
} catch (e) {
   console.log(e)
   console.error('smush failed test case');
}

try {
   //const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = { x: 0, y: 9, q: 10 };
  //should fail
   const smushTwo = lab2_3.smush(second,third);
   //console.log(extendTwo);
   console.log('smush passed successfully');
} catch (e) {
   console.log(e)
   console.error('smush failed test case');
}

try {
   //const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = { x: 0, y: 9, q: 10 };
  //should fail
   const smushThree = lab2_3.smush(third);
   //console.log(extendTwo);
   console.log('smush passed successfully');
} catch (e) {
   //console.log(e)
   console.error('smush failed test case');
}

try {
   //const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = [{ x: 0, y: 9, q: 10 }];
  //should fail
   const smushFour = lab2_3.smush(third);
   //console.log(extendTwo);
   console.log('smush passed successfully');
} catch (e) {
   //console.log(e)
   console.error('smush failed test case');
}

try {
   //const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = {};
  //should fail
   const smushFive = lab2_3.smush(second,third);
   console.log(smushFive);
   console.log('smush passed successfully');
} catch (e) {
   //console.log(e)
   console.error('smush failed test case');
}

try {
   //const first = { x: 2, y: 3};
   const second = {};
   const third = {};
  //should fail
   const smushSix = lab2_3.smush(second,third);
   console.log(smushSix);
   console.log('smush passed successfully');
} catch (e) {
   //console.log(e)
   console.error('smush failed test case');
}

try {
   //const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = undefined;
  //should fail
   const smushSeven= lab2_3.smush(second,third);
   console.log(smushSeven);
   console.log('smush passed successfully');
} catch (e) {
   console.log(e)
   console.error('smush failed test case');
}

/////////////////////////////////////////////
try {
  //should pass
   const mapOne = lab2_3.mapValues({ a: 1, b: 2, c: 3 }, n => n + 1);
   //console.log(mapOne);
   console.log('map passed successfully');
} catch (e) {
   console.log(e)
   console.error('map failed test case');
}

try {
  //should pass
   const mapTwo = lab2_3.mapValues({ a: 1, b: 2, c: 3 });
   //console.log(mapOne);
   console.log('map passed successfully');
} catch (e) {
   console.log(e)
   console.error('map failed test case');
}
try {
  //should pass
   const mapThree = lab2_3.mapValues({}, n => n + 1);
   //console.log(mapOne);
   console.log('map passed successfully');
} catch (e) {
   console.log(e)
   console.error('map failed test case');
}

try {
  //should pass
   const mapFour = lab2_3.mapValues(undefined, n => n + 1);
   console.log(mapFour);
   console.log('map passed successfully');
} catch (e) {
   console.log(e)
   console.error('map failed test case');
}
