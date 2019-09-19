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
    //this means we can run through work and check
    let truS = data[ssn].ssn;
    let j = 0;
    let title = "";
    let company = "";
    let status = false;
    //run through the work JSON
    for (;j<work.length;j++){
      if (truS === work[j].ssn){
        //so if the SSN match we have out person
        title = work[j].jobTitle;
        company = work[j].company;
        if (typeof title !== "string"){
          title = JSON.stringify(title);
        }
        if (typeof company !== "string"){
          company = JSON.stringify(company);
        }
        status = work[j].willBeFired;
        //console.log('RAWR')
        //console.log(typeof work[j].willBeFired) //Boolean
        if (status === true){ //assuming its Boolean and not string
          status = "They will be fired."
        }
        else{
          status = "They will not be fired."
        }
        //now combine and return thi
        let ans = firstName + ' ' + lastName + ' - ' + title + ' at '+ company +' - '+status;
        //console.log(typeof ans)
        return ans;
      }
    }
  }
  else{
    //we couldn't get a zip most likely cause person no exist
    throw "The person most likely does not exist in the People Data, thus we can't tell"
  }
}

async function findTheHacker(ip){
  let data = await getPeople();
  let work = await getWork();
  if (arguments.length < 1){
    throw "No argument of ip was given"
  }
  if (arguments.length > 1){
    throw "There was too many arguments given"
  }
  if (ip === undefined){
    throw "There was no given ip"
  }
  //check type now
  if (typeof ip !== "string"){
    throw "The given ip is not of type string"
  }
  let i = 0;
  let ssn = undefined;
  for (;i<work.length;i++){
    if (ip === work[i].ip){
      ssn = work[i].ssn;
    }
  }
  if (ssn === undefined){
    throw "Dear Boss - We could not find the hacker with that IP";
  }
  let j = 0;
  for (;j<data.length;j++){
    if (ssn === data[j].ssn){
      let ans = data[j].firstName + ' ' +data[j].lastName + ' is the hacker!'
      return ans;
    }
  }

}

module.exports = {
  getPeople,
  getWeather,
  getWork,
  whereDoTheyWork,
  findTheHacker
}
