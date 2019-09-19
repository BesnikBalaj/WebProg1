//Need to return person full name as a string
const axios = require('axios');
//The objects in here can't be same
async function getPeople(){
  const { data:pData } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
  return pData // this will be the array of people
}
async function getWeather(){
  const { data:wData } = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')
  return wData // this will be the array of people
}
async function getWork(){
  const { data:workData } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
  return workData // this will be the array of people
}

async function whereDoTheyWork(firstName,lastName){
  let weather = await getWeather();
  let data = await getPeople();
  let work = await getWork();

  if (arguments.length < 2){
    if (firstName === undefined){
      throw "There was no argument given for the first name"
    }
    else{
      throw "There was no argument given for the last name"
    }
  }
  if (arguments.length > 2){
    throw "There was too many arguments given"
  }
  //RAWR
  //check type now
  if (typeof firstName !== "string"){
    throw "firstName is not a string"
  }
  if (typeof lastName !== "string"){
    throw "lastName is not a string"
  }
  let ssn = undefined;
  //Run through the people data and check if the first and last name match
  let i = 0;
  //console.log(data)
  for (;i<data.length;i++){
    if (data[i].firstName === firstName && data[i].lastName === lastName){
      ssn = i;
      break;
      //console.log(zip)
    }
  }
  if (ssn !== undefined){
    //this means we can run through weather and check
    let truS = data[ssn].ssn;
    let j = 0;
    //console.log('CHECK')
    let j = 0;
    //run through the work JSON
  }
  else{
    //we couldn't get a zip most likely cause person no exist
    throw "The person most likely does not exist in the People Data, thus we can't tell"
  }

}
