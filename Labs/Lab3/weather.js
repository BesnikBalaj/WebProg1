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

async function shouldTheyGoOutside(firstName, lastName){
  let weather = await getWeather();
  let data = await getPeople();
  //console.log(weather);
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
  let zip = undefined;
  //Run through the people data and check if the first and last name match
  let i = 0;
  //console.log(data)
  for (;i<data.length;i++){
    if (data[i].firstName === firstName && data[i].lastName === lastName){
      zip = i;
      break;
      //console.log(zip)
    }
  }
  //console.log('BREAK')
  //console.log(weather);
  if (zip !== undefined){
    //this means we can run through weather and check
    let truZip = data[zip].zip;
    let j = 0;
    //console.log('CHECK')
    for (;weather.length;j++){
      if (weather[j].zip === truZip){
        if (weather[j].zip >= 34){
          return "Yes, " +firstName+ " should go Outside";
        }
        else{
          return "No, "+firstName +" should not go outside";
        }
      }
    }
  }
  else{
    //we couldn't get a zip most likely cause person no exist
    throw "The person most likely does not exist in the People Data, thus we can't tell"
  }


}

module.exports = {
  getPeople,
  getWeather,
  shouldTheyGoOutside
}
