//I pledge my honor that I have abided by the Stevens Honor System" - Besnik Balaj
const lab2 = require("./arrayUtils");
//Apparently there is no built in function but I believe the below is checking type,length and then bit work?
//https://stackoverflow.com/questions/40120915/javascript-function-that-returns-true-if-a-letter
//Above link is utilized for detection of characters since wasn't sure if we can assume string was just a  normal string
function isAlpha(ch){
  return typeof ch === "string" && ch.length === 1 && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}

function capitalize(string){
  if (arguments.length !== 1){
    throw "Move than 1 argument was given"
  }
  if(typeof string !== "string"){
    throw "Argument is not a string"
  }

  let str = string.split("");
  let i = 0;
  let flag = 0;
  //console.log(str)
  for (;i < str.length;i++){
    if (!isAlpha(str[i])){ //if not not a Alpha character
      continue;
    }
    else if (isAlpha(str[i]) && flag === 0){
      //if it is a character and flag isn't set, capitalize first Character
      flag = 1;
      str[i] = str[i].toUpperCase();
    }
    else{
      str[i] = str[i].toLowerCase();//is alpha character but flag already set so its not first one
    }
  }
  //console.log(str)
  let res = str.join('');
  return res;
}

function repeat(string,num){
  if (arguments.length !== 2){
    throw "Move than 2 arguments was given or not enough"
  }
  if(typeof string !== "string"){
    throw "First Argument is not a string"
  }
  if (Number.isNaN(num)){
    throw "num is not a number"
  }
  if(num < 0){
    throw "Number is a negative, can't work with it"
  }
  let res = '';
  if (num === 0){
    return res;
  }
  else{
    let i = 0;
    for (;i<num;i++){
      res = res + string;
    }
    return  res;
  }
}

function countChars(string){
  if (arguments.length !== 1){
    throw "Move than 1 arguments was given or not enough"
  }
  if(typeof string !== "string"){
    throw "Argument is not a string"
  }
  let res = string.split('')
  let ans = lab2.countElements(res);
  return ans;
}

module.exports ={
  capitalize,
  repeat,
  countChars
};
