console.log("I pledge my honor that I have abided by the Stevens Honor System - Besnik Balaj");
const lab1 = require("./lab1");

console.log("Beginning lab1 question1 tests, good note is -1 means an issue was with the test so 'considered' it to be incorrect(ie wrong type)");

// should output 14
console.log(lab1.questionOne(29));
// should output the error
console.log(lab1.questionOne());
// Take into account for no argument given
console.log(lab1.questionOne('SUP'));
// Should fail
console.log(lab1.questionOne([2, 1, 2]));
//9
console.log(lab1.questionOne([1, 1, 1]));
//3
console.log(lab1.questionOne([5]));//I wonder if this  would work
//25
console.log(lab1.questionOne([5, 1, 4]));
//
console.log("Beginning lab1 question2 tests, good note is -1 means an issue was with the test so 'considered' it to be incorrect(ie wrong type)");
console.log(lab1.questionTwo(7));
// should output 13
console.log(lab1.questionTwo(5));
// should output  5
console.log(lab1.questionTwo(6));
// 8
console.log(lab1.questionTwo(1));
// 1
console.log(lab1.questionTwo(11));
//89
console.log(lab1.questionTwo('string'));
// should fail
console.log(lab1.questionTwo());
// should fail

console.log('BREAK')
console.log("Beginning lab1 question3 tests, good note is -1 means an issue was with the test so 'considered' it to be incorrect(ie wrong type)");
console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere."));
// should output 196
console.log(lab1.questionThree());
console.log(lab1.questionThree("aeiou"));
console.log(lab1.questionThree("YAAA YEET"));
console.log(lab1.questionThree("I Wonder if Prof Hill is a NY Giants Fan"));


console.log("Beginning lab1 question4 tests, good note is -1 means an issue was with the test so 'considered' it to be incorrect(ie wrong type)");
console.log(lab1.questionFour(10));
// should output 3628800
console.log(lab1.questionFour(1));
// should output 1
console.log(lab1.questionFour(0));
// should output 1
console.log(lab1.questionFour(-58));
// should output NaN`
console.log(lab1.questionFour(9));
// Should output 362880
console.log(lab1.questionFour(5));
// Should output 120
