const mongoColl = require("./mongoCollections");//they are found in previous directory
const mongoConn = require("./mongoConnection");//
const pokemon = mongoColl.pokemon;
const pokeID = require("mongodb").ObjectID;
//
//NOTE: Using alot of this from Besnik Balaj and Amanda Ly Lab 4 code as well as Prof Hill Git Page
//
async function createTask(title, description){
  //include stuff in here
  if (arguments.length > 2){
    throw "More than 2 arguments were given"
  }
  if (arguments.length < 2){
    throw "Less than 2 arguments were given"
  }
  if (typeof title === undefined){
    throw "Name argument is undefined"
  }
  if (typeof description === undefined){
    throw "animalType argument is undefined"
  }
  if (typeof title !== 'string'){
    throw "The name given is not a string"
  }
  if (typeof description !== 'string'){
    throw "The animalType argument given is not a string"
  }
  const pokeDex = await pokemon();
  let pokeTask = {
    title: title,
    description: description,
    completed: false,
    completedAt: null
  }
  const pokeinfo = await pokeDex.insertOne(pokeTask);
  if (pokeinfo.insertedCount === 0){
    throw "We couldn't add that animal (pokemon)"
  }
  const newpokeId = pokeinfo.insertedId; //THIS IS ONLY POKEMON RELATED
  return pokeTask;
}

async function getAllTasks(){
  if (arguments.length > 0){
    console.log("Some arguments were passed but not needed");
  }
  const pokeDex = await pokemon();
  const pokeTaskArray = await pokeDex.find({}).toArray();
  return pokeTaskArray;
}

async function getTask(id){
  if (arguments.length > 1){
    throw "The amount of arguments given was more than 1"
  }
  if (arguments.length < 1){
    throw "The number of arguments given was less than 1"
  }
  if (typeof id === undefined){
    throw "The id given was not of type string/can't be converted to an ObjectID"
  }
  if (typeof id !== "string"){
    throw "A non string argument was given"
  }
  const pokeStats = pokeID(id);
  const pokeDex = await pokemon();
  const thePokemon = await pokeDex.findOne({_id: pokeStats});
  if (thePokemon === null){
    throw "There currently isn't a PokemonTask with that ID" //Possibly a diggerent generation
  }
  return thePokemon;
}

async function completeTask(taskId){
  //put in le code brudda
  let timeJohto = new Date();
  console.log(timeJohto);
  if (arguments.length > 1){
    throw "The amount of arguments given was more than 1"
  }
  if (arguments.length < 1){
    throw "The number of arguments given was less than 1"
  }
  if (typeof taskId !== "string"){
    throw "The id argument is needed to be passed in as a string"
  }
  const pokeEV = pokeID(taskId);
  const pokeDex = await pokemon();
   //Need to convert id passed FromHexString? <----
  const pokeEvolve = await pokeDex.updateOne({_id: pokeEV},{$set: {completed: true, completedAt: timeJohto }});
  //if update succeeds we need to return the animal as it is after it is updated
  const thePokemon = await pokeDex.findOne({_id: pokeEV});
  if (thePokemon === null){
    throw "There currently isn't a Animal with that ID, thus the updated animal doesn't exist" //Possibly a diggerent generation
  }
  console.log('Check')
  return thePokemon;

}

async function removeTask(id){
  if (arguments.length > 1){
    throw "The amount of arguments given was more than 1"
  }
  if (arguments.length < 1){
    throw "The number of arguments given was less than 1"
  }
  if (typeof id === undefined){
    throw "The id given was not of type string/can't be converted to an ObjectID"
  }
  if (typeof id !== "string"){
    throw "A non string argument was given"
  }
  const pokeTaskDelete = pokeID(id);
  const pokeDex = await pokemon();
  //Below was used from Professor Hill's Lecture 4 Git code
  //https://github.com/Stevens-CS546/CS-546/blob/master/Lecture%20Code/lecture_04/dogs.js
  const thePokemon = await pokeDex.removeOne({_id: pokeTaskDelete});
  if (thePokemon.deletedCount === 0){
    throw "We could not delete the animal with that id Given"
  }
  return true; //Return true if it succeeds, weird
}

module.exports = {
  createTask,
  removeTask,
  completeTask,
  getAllTasks,
  getTask
}
