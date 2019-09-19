//Need to return person full name as a string
const axios = require('axios');

async function getPeople(){
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  return data // this will be the array of people
}

async function getPersonById(id){
  let  data = await getPeople();
  //so id is location + 1
  //so 43 is Brew which meant index of array was 44
  //need to search id+1
  if (arguments.length < 1){
    throw "There was no id given by this argument"
  }
  if (arguments.length > 1){
    throw "There was too many arguments given"
  }
  if (Number.isNaN(id)){
    //if id is not a numver
    throw "The id given is not a number and can't be used"
  }
  if (!Number.isInteger(id)){
    throw "The id given is not an integer"
  }
  //console.log ("The length of objects is: " + data.length)
  if (id <= 0 ){
    throw "The id is negative or 0, 0 isn't a possible id currently"
  }
  if (id > data.length){
    throw "The id is out the range of the JSON array of objects - larger than People"
  }

  let actId = id-1;
  //let ans = JSON.stringify(data[actId].lastName) + JSON.stringify(data[actId].firstName)
  let fName = data[actId].firstName;
  let lName = data[actId].lastName;
  if (typeof fName !== "string"){
    JSON.stringify(fName);
  }
  if (typeof lName !== "string"){
    JSON.stringify(lName);
  }

  let ans = fName + ' ' + lName;
  //return JSON.stringify(ans);
  return ans;
}

async function lexIndex(index){
  //can make empty array
  //can push the combos of last name + First name in
  //can then sort the array
  //call getPersonById since now I have index
  if (arguments.length < 1){
    throw "There was no index given by this argument"
  }
  if (arguments.length > 1){
    throw "There was too many arguments given"
  }
  if (Number.isNaN(index)){
    //if id is not a numver
    throw "The index given is not a number and can't be used"
  }
  if (!Number.isInteger(index)){
    throw "The index given is not an integer"
  }
  let  data = await getPeople();
  //console.log ("The length of objects is: " + data.length)
  if (index < 0){
    throw "The index is negative"
  }

  if (index > data.length){
    throw "The id is out the range of the JSON array length"
  }

  let newArr = [];
  let i = 0;

  for (;i<data.length;i++){
    let ans = data[i].lastName+ ' ' + data[i].firstName
    newArr.push(ans)
  }
  newArr.sort();
  //return getPersonById(index)//I reset Data
  let actId = index;
  //let ans = JSON.stringify(data[actId].lastName) + JSON.stringify(data[actId].firstName)
  let ans2 = newArr[actId].split(" ");
  let fName = ans2[1];
  let lName = ans2[0];
  if (typeof fName !== "string"){
    JSON.stringify(fName);
  }
  if (typeof lName !== "string"){
    JSON.stringify(lName);
  }
  let actAns = fName + ' ' +lName;
  //return newArr //for testing purpose
  //return JSON.stringify(actAns);
  return actAns;
}

async function firstNameMetrics(){
  //Do I need to check if the value actually exist?
  let  data = await getPeople();
  let i = 0;
  let totalLetters = 0;
  let totalVowels = 0;
  let totalConsonants = 0;
  let longestName = 0; //let this hold index
  let shortestName = 0; //let this hold index
  let shortestNameLength = 0;
  let longestNameLength = 0;
  //let = //maybe set array of values
  for (;i < data.length;i++){
    //so first lets deal with length
    if (i === 0){
      //then we have the very first case so length is this name
      longestName = i;
      shortestName = i;
      shortestNameLength = data[i].firstName.length;
      longestNameLength = data[i].firstName.length;
    }
    else{
      //we don't have the first case so now we can check the name's length
      //making an executive decision on length
      if (shortestNameLength > data[i].firstName.length){
        shortestName = i;
        shortestNameLength = data[i].firstName.length;
      }
      if (longestNameLength < data[i].firstName.length){
        longestName = i;
        longestNameLength = data[i].firstName.length;
      }
    }
    //So now after dealing with lengths we deal with letters
    let name = data[i].firstName.toLowerCase();
    totalLetters = totalLetters + name.length;
    let j = 0;
    let nameLen = name.split("");
    //console.log(nameLen)
    //let vowelcnt = 0;
    //let conscnt = 0;
    for (;j<nameLen.length;j++){
      if (nameLen[j] === 'a' || nameLen[j] === 'e' || nameLen[j] === 'i' || nameLen[j] === 'o' || nameLen[j] === 'u'){
        totalVowels = totalVowels + 1;
        //console.log(nameLen[i])
      }
      else{
        totalConsonants = totalConsonants + 1;
      }
    }

  }
  //Now we have all the values to pass to an object
  let ans = {
    totalLetters: totalLetters,
    totalVowels: totalVowels,
    totalConsonants: totalConsonants,
    //longestName: JSON.stringify(data[longestName].firstName),
    longestName: data[longestName].firstName,
    //shortestName: JSON.stringify(data[shortestName].firstName)
    shortestName: data[shortestName].firstName
  }

	//Letters = 2982
	//Vowels = 1237
//	Consonants = 1745
	//Name = Constantine
	//Name = Vi

  return ans;

}


module.exports = {
  getPersonById,
  getPeople,
  lexIndex,
  firstNameMetrics
  // commas if have more than 1
}
