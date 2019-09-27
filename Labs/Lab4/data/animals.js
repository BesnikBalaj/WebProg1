const mongoColl = require("./../mongoCollections");//they are found in previous directory
const mongoConn = require("./../mongoConnection");//
const pokemon = mongoColl.pokemon;
const pokeID= require("mongodb").ObjectID;

async function create(name,animalType) {
  if (arguments.length > 2){
    throw "More than 2 arguments were given"
  }
  if (arguments.length < 2){
    throw "Less than 2 arguments were given"
  }
  if (typeof name === undefined){
    throw "Name argument is undefined"
  }
  if (typeof animalType === undefined){
    throw "animalType argument is undefined"
  }
  if (typeof name !== 'string'){
    throw "The name given is not a string"
  }
  if (typeof animalType !== 'string'){
    throw "The animalType argument given is not a string"
  }
  const pokeDex = await pokemon();
  //now we need to set an object
  //const mortimer = await animals.create("Mortimer", "Giraffe"); this will be push
  let poke = {
    name: name,
    animalType: animalType
  }
  //https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp
  //https://stackoverflow.com/questions/36792649/whats-the-difference-between-insert-insertone-and-insertmany-method
  //https://docs.mongodb.com/manual/reference/method/db.collection.insert/
  const pokeinfo = await pokeDex.insertOne(poke);
  //https://github.com/stevens-cs546-cs554/CS-546/blob/master/Lectures/lecture_04/code/dogs.js
  if (pokeinfo.insertedCount === 0){
    throw "We couldn't add that animal (pokemon)"
  }
  //console.log(pokeinfo) //error checking
  const newpokeId = pokeinfo.insertedId;
  return poke;
}

async function getAll(){
  //Takes no arguments
  //Should we care if any arguments come in?
  if (arguments.length > 0){
    console.log("Some arguments were passed but not needed");
  }
  const pokeDex = await pokemon();
  //https://api.jquery.com/toArray/
  const poke = await pokeDex.find({}).toArray();
  return poke;
}

async function get(id){
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
  //https://stackoverflow.com/questions/6578178/node-js-mongoose-js-string-to-objectid-function
  const pokeEV = pokeID(id);
  //console.log(pokeEV)
  const pokeDex = await pokemon();
  //Below was used from Professor Hill's Lecture 4 Git code
  //https://github.com/Stevens-CS546/CS-546/blob/master/Lecture%20Code/lecture_04/dogs.js
  const thePokemon = await pokeDex.findOne({_id: pokeEV});
  if (thePokemon === null){
    throw "There currently isn't a Animal with that ID" //Possibly a diggerent generation
  }
  return thePokemon;
}

async function remove(id){
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
  const pokeEV = pokeID(id);
  const pokeDex = await pokemon();
  //Below was used from Professor Hill's Lecture 4 Git code
  //https://github.com/Stevens-CS546/CS-546/blob/master/Lecture%20Code/lecture_04/dogs.js
  const thePokemon = await pokeDex.removeOne({_id: pokeEV});
  if (thePokemon.deletedCount === 0){
    throw "We could not delete the animal with that id Given"
  }
  return thePokemon; //Return the animal as it was before it was deleted
}

async function rename(id,newName){
  if (arguments.length > 2){
    throw "The amount of arguments given was more than 2"
  }
  if (arguments.length < 2){
    throw "The number of arguments given was less than 2"
  }
  if (typeof id !== "string"){
    throw "The id argument is needed to be passed in as a string"
  }
  if (typeof newName !== "string"){
    throw "The newName argument is need to be passed in as a string"
  }
  const pokeEV = pokeID(id);
  const pokeDex = await pokemon();
  //https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/
  //db.collection.updateOne(
  // <query>,
   //{ $set: { status: "D" }, $inc: { quantity: 2 } }, <-- how to update with an Update Operator Expressions Doc
   //...
//)
  //console.log('Rawr?')
  const pokeEvolve = await pokeDex.updateOne({_id: pokeEV},{$set: {name: newName } });
  //if update succeeds we need to return the animal as it is after it is updated
  const thePokemon = await pokeDex.findOne({_id: pokeEV});
  if (thePokemon === null){
    throw "There currently isn't a Animal with that ID, thus the updated animal doesn't exist" //Possibly a diggerent generation
  }
  return thePokemon;
}

module.exports = {
  create,
  getAll,
  get,
  remove,
  rename
}
