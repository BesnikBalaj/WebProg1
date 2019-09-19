let string1 = "This is the first string, it's kool";
const string2 = "This is the second string, it is a constant";

//string2 = 'new' //should crash
string1 = "Rawr" //this is fine since its not const
var string3 = "This is the thrid string, it's functionally scoped";

//Coulnd't get bottom to work but can do concatenate
//let string4 = 'String is: ${string1} after some newlines';
//console.log(string4);

console.log('Hellow World')

//console.log(string5.toLowerCase());

//Undefined Var is equal to a Null Var??

let myStringArray = ['r','s','as'];

myStringArray.forEach(value => {
  console.log(value)
});

//filter will filter an array
let oddNumbers = myNumArray.filter(num => {

});
//myNumArray.push(6) is to add a value to it
//.pop() will remove the last element

Object
let myObj= {
  hello: 'World',
  num: 1,
  bool: true,
  myFn: () =>{
    return 'Hello';
  }
};

myObj['NewKey'] = 'i am a new Key'
myObj.directlyAddedKey = "I've been added";

const obj1 ={
  a:1,
  b:2,
  c:3
}

const obj2 ={
  b:2,
  a:1,
  c:3
}
//Both objects are the same since key-pair values are same

obj2.testing='Test';//Can add key-pair to this const object
obj2.a=10;//will still allow and change the a

//But setting:
obj2 = {
  name: 'Sup'
}
//will throw an error


function funcKeyName(){
  console.log();
}
//When use this variable, use this variable and essentially call function
let doubleUpAnonymous = function(x) {
  return x*2;
};

let doubleUp = x =>{
  return x*2;
};
