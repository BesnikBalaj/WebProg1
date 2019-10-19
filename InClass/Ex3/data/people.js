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
  //if (!Number.isInteger(id)){
    //throw "The id given is not an integer"
  //}
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

module.exports = {
  getPersonById,
  getPeople,
  // commas if have more than 1
}
