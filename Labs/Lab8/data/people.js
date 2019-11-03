//Yoinked from my lab3

//Need to return person full name as a string
const axios = require('axios');
//yoinked from lab 3
async function getPeople(){
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  return data // this will be the array of people
}
//yoinked from lab 3
async function getPersonById(id){
  let  data = await getPeople();
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

  let actId = id-1;//if you want 1, you want technically index 0
  let person = data[actId];
  return person;
}

async function getPersonthroughInput(query){
  //query will be holding firstName or lastName that contains provided request form param
  //What?
  let  data = await getPeople();
  if (arguments.length < 1){
    throw "There was no query given by this argument"
  }
  if (arguments.length > 1){
    throw "There was too many arguments given"
  }
  if (typeof query !== "string"){
    throw "Eyo pal, kindof need a string there thankee"
  }
  let i = 0;
  let ans = [];
  let cnt = 0; //can only accept 20
  //console.log('RAWR');
  //console.log(data[0]);
  //console.log(data[0].firstName)
  for (; i<data.length ; i++){
    let fName = data[i].firstName.toLowerCase();
    let lName = data[i].lastName.toLowerCase();
    if (cnt === 20){
      break;
    }
    let lowerQuery = query.toLowerCase();
    //Parse through le informazione
    if (fName.includes(lowerQuery) || lName.includes(lowerQuery)){
      let name = {firstName: data[i].firstName , lastName: data[i].lastName};
      ans.push(name);
      cnt = cnt + 1;
    }
  }
  console.log(ans);
  return ans;//holds array of objects with the answer
  //search through data
  //.includes check if string contains another string
  //need only 20 of these bad boys if finding more

}

module.exports = {
  getPersonById,
  getPersonthroughInput
}
