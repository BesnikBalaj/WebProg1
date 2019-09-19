//I pledge my honor that I have abided by the Stevens Honor System" - Besnik Balaj
const questionOne = function questionOne(arr) {
  let sum = 0;
  let i = 0;
  let holder = arr;

  if (!Array.isArray(holder)){
     console.log('ERROR = Argument given is not an array.');
     return -1
  }
  for (;i < holder.length;i++){
    //check if each instance in array is number
    if (isNaN(holder[i])){ //if input was array but not a number
      //console.log?
      console.log('ERROR = Array contained not a numbers.');
      return -1
    }
    sum = sum + (holder[i]*holder[i]);
  }
  return sum;
}
///////////////////////////////////////////////
const questionTwo = function questionTwo(num) {
if (Math.sign(num) === -1){
  console.log('ERROR = trying to do a Fibonacci of a Negative Number')
  return 0
}
if (isNaN(num)) {
  console.log('ERROR = Argument input given is not a number')
  return -1
}
if(num.length > 1){
  console.log('ERROR = Argument is larger than needed')
  return -1
}
//let sum = 0; Don't need this with recursion way
if(num <= 0){
  return 0;
}
else if (num === 1){
  return 1;
}
else{
  return questionTwo(num-1) + questionTwo(num-2);
}
}
////////////////////////////////////////////////
const questionThree = function questionThree(text) {
if(typeof text !== "string"){
  console.log('ERROR = Argument given is not a string');
  return -1;
}
var holder = text.toLowerCase();
let count = 0;
let i = 0;
//console.log(holder)//check lowercase worked
var holder = holder.split("");
//console.log(holder);
for (;i<holder.length;i++){
  if (holder[i] === 'a' || holder[i] === 'e' || holder[i] === 'i' || holder[i] === 'o' || holder[i] === 'u'){
    count += 1;
  }
}
return count;
}

const questionFour = function questionFour(num) {
let count = 0;
if(isNaN(num)){
  console.log('ERROR = Argument given is not a number')
  return -1;
}
if (Math.sign(num) === -1){
  return NaN;
}
if(num === 0 || num === 1){
  return 1;
}
else{
  count = num * questionFour(num-1);
}
return count;
}


module.exports = {
  firstName: "Besnik",
  lastname: "Balaj",
  studentId: "10417369",
  questionOne,
  questionTwo,
  questionThree,
  questionFour
};
