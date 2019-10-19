const mongoConn = require("./../mongoConnection");
const mongoColl = require("./../mongoCollections");
const pokeposts = mongoColl.posts;
const pokemon = mongoColl.animals;
const pokeID = require('mongodb').ObjectID;
const animals = require("./animals.js");

async function getAll(){
	if (arguments.length > 0){
    console.log("Some arguments were passed but not needed");
  }
	const pokeDex = await pokeposts();
  //https://api.jquery.com/toArray/
	const poke = await pokeDex.find({}).toArray();
  return poke;
}
//Crete/Read/Update/Delete
async function Create(title, author, content){
	//author is the id of the animal apparently?
	if (arguments.length > 3){
    throw "The amount of arguments given was more than 3"
  }
  if (arguments.length < 3){
    throw "The number of arguments given was less than 3"
  }
  if (typeof title !== "string"){
    throw "The title argument is needed to be passed in as a string"
  }
  if (typeof author !== "string"){
    throw "The authro argument is need to be passed in as a string"
  }
  if (typeof content !== "string"){
    throw "The content argument is need to be passed in as a string"
  }
  if (title === undefined){
    throw "need title to be provided"
  }
  if (author === undefined){
    throw "need author to be provided"
  }
  if (content === undefined){
    throw "need content to be provided"
  }
	const postsDex = await pokeposts();
  let post = {
    title: title,
    author: author,
    content: content
  }
	const pokeinfo = await postsDex.insertOne(post);
  //https://github.com/stevens-cs546-cs554/CS-546/blob/master/Lectures/lecture_04/code/dogs.js
  if (pokeinfo.insertedCount === 0){
    throw "We couldn't add that post"
  }
	const newpokeId = pokeinfo.insertedId;
	console.log(typeof newpokeId);
	const pokeINFO = await pokemon();
	const pokeAniID = pokeID(author);
	const newPostPokeUpdate = pokeINFO.updateOne({_id: pokeAniID}, {$addToSet: {posts: String(newpokeId)}});
  //console.log(pokeinfo) //error checking
  return post;
}

async function Read(id){
	if (arguments.length > 1){
    throw "The amount of arguments given was more than 2"
  }
  if (arguments.length < 1){
    throw "The number of arguments given was less than 2"
  }
  if (typeof id !== "string"){
    throw "The ID argument is needed to be passed in as a string"
  }
  if (id === undefined){
    throw "need ID to be provided"
  }
	const postEV = pokeID(id);
  const pokeP = await pokeposts();
	const lePokePost = pokeP.findOne({_id:postEV});
	if (lePokePost === null){
    //then we didn't find it lol
    throw "There exists no post with that ID"
  }
	return lePokePost;
}

async function Update(id, newTitle, newContent){
	//Um I guess any of the three parameters?
  /*
  if (typeof title !== "string"){
    throw "The title argument is needed to be passed in as a string"
  }
  if (typeof author !== "string"){
    throw "The author argument is need to be passed in as a string"
  }
  if (typeof content !== "string"){
    throw "The content argument is need to be passed in as a string"
  }*/
	if (typeof id !== "string"){
    throw "The id argument is need to be passed in as a string"
  }
	//////////////////////////////
  const postEV = pokeID(id);
  const pokeP = await pokeposts();
  const possibleP = await pokeP.findOne({_id: postEV});
	//console.log(possibleP);
  if (possibleP === null){
    //Just break out earlier than doing nothing lol
    throw "No current post inside  with that ID"
  }
	if (newTitle !== null){
    //then we update le title
    pokeP.updateOne({_id:postEV},{$set: {title: newTitle}});
  }
  if (newContent !== null){
    //then we update le title
    pokeP.updateOne({_id:postEV},{$set: {content: newContent}});
  }
	//done updating I think so do I return?
  const possibleUpdatedP = await pokeP.findOne({_id: postEV});
  return possibleUpdatedP;
}

async function Delete(id){
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
  const pokeDex = await pokeposts();
	//Below was used from Professor Hill's Lecture 4 Git code
  //https://github.com/Stevens-CS546/CS-546/blob/master/Lecture%20Code/lecture_04/dogs.js
  const lostPokemon = await pokeDex.findOne({_id: pokeEV});
  const thePokemon = await pokeDex.removeOne({_id: pokeEV});
	if (thePokemon.deletedCount === 0){
    throw "We could not delete the animal with that id Given"
  }
  return lostPokemon;
}


module.exports = {
	Create,
	Read,
	Update,
	Delete,
	getAll
}
