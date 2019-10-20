const mongoConn = require("./../mongoConnection");
const mongoColl = require("./../mongoCollections");
const pokemon = mongoColl.animals;
const pokeposts = mongoColl.posts;
const posts = require("./posts.js");
const pokeID = require('mongodb').ObjectID;

async function create(name, animalType){
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
	const pokeSquad = await pokemon();
	let newPoke = {
		name: name,
		animalType: animalType,
		likes: [], //new
		posts: [] //new
	};
	//https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp
  //https://stackoverflow.com/questions/36792649/whats-the-difference-between-insert-insertone-and-insertmany-method
  //https://docs.mongodb.com/manual/reference/method/db.collection.insert/
	await pokeSquad.insertOne(newPoke);
	if (pokeSquad.insertedCount === 0){
    throw "We couldn't add that animal (pokemon)"
  }
	const newpokeId = pokeSquad.insertedId;
	return newPoke;
}

const getAll = async function getAll(){
	//Takes no arguments
  //Should we care if any arguments come in?
  //Most likely not?
  if (arguments.length > 0){
    console.log("Some arguments were passed but not needed");
  }
	const pokeSquad = await pokemon();
	//https://api.jquery.com/toArray/
	const pokeSquads = await pokeSquad.find({}).toArray();
	return pokeSquads;
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
	const thePokemon = await pokeDex.findOne({ _id: pokeEV});
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
	const lostPokemon = await pokeDex.findOne({_id: pokeEV});
	//need to take the lists of posts getting now deleted
	let postsArr = lostPokemon.posts;//this holds array of all the posts with that animal
	let i = 0;
	const postsDex = await pokeposts();
	for (i;i<postsArr.length;i++){
		//rawr rawr
		let postID = postsArr[i]._id;
		//console.log('BREAK');
		//console.log(postID);
		const postsEV = pokeID(postID);
	  const lostpostPokemon = await postsDex.findOne({_id: postsEV});
	  const thepostPokemon = await postsDex.removeOne({_id: postsEV});
		//console.log('Wassup')
		if (thepostPokemon.deletedCount === 0){
	    throw "We could not delete the animal with that id Given"
	  }
	}
  const thePokemon = await pokeDex.removeOne({_id: pokeEV});
  if (thePokemon.deletedCount === 0){
    throw "We could not delete the animal with that id Given"
  }
	return lostPokemon;
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
  //https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/
  const pokeEvolve = await pokeDex.updateOne({_id: pokeEV},{$set: {name: newName} });
  //if update succeeds we need to return the animal as it is after it is updated
  const thePokemon = await pokeDex.findOne({_id: pokeEV});
  if (thePokemon === null){
    throw "There currently isn't a Animal with that ID, thus the updated animal doesn't exist" //Possibly a diggerent generation
  }
  return thePokemon;
}

async function possibleNameUpdate(dumbArray){
	//Rada Rada - Dude from Chowder whose name I, Schnitzel>?
	thingToSwitch = [];
	const thingy = {
		_id: "",
		title:""
	};
	let apple = 0;
	for (apple;apple < dumbArray.length;apple++){
		//now gotta do the le find and put it in a new object schema and append that to array THOUGHTS
		const postObject = await posts.Read(apple);
		thingy._id = postObject._id;
		thingy.title = postObject._id;
		thingToSwitch.push(thingy);
	}
	//Should now do a thingy where I return le array
	return thingToSwitch;
}

async function fullyUpdate(id, newName, newType){
	if (typeof id !== "string"){
    throw "The id argument is need to be passed in as a string"
  }
	/////////////////////////////
  const postEV = pokeID(id);
  const pokeP = await pokemon();
  const possibleP = await pokeP.findOne({_id: postEV});
	if (possibleP === null){
    //Just break out earlier than doing nothing lol
    throw "No current post inside  with that ID"
  }
	const oldName = possibleP.name;
	//console.log(typeof oldName);
	if (typeof newName !== "undefined"){
		if (typeof newName !== "string"){
	    throw "The id argument is need to be passed in as a string"
	  }
    //then we update le title
    pokeP.updateOne({_id:postEV},{$set: {name: newName}});
		//now need to go through all posts and change name of potential author
		const postsDex = await pokeposts();
	  //https://api.jquery.com/toArray/
		//So bottom line gets me all posts that animal made
		postsDex.updateMany({"author.name": oldName},{$set: {"author.name": newName}});
		//Let's find all and put in array
		//const lePosts = await postsDex.find().toArray();
		//console.log(lePosts);
		//console.log(postsARR);
  }
	//console.log('BREAK')
	//console.log(newType);
  if (typeof newType !== "undefined"){
		if (typeof newType !== "string"){
	    throw "The id argument is need to be passed in as a string"
	  }
    //then we update le title
    pokeP.updateOne({_id:postEV},{$set: {animalType: newType}});
  }
	//done updating I think so do I return?
	const possibleUpdatedP = await pokeP.findOne({ _id: postEV});
  return possibleUpdatedP;
}

async function liking(animalID,postID){
  if (arguments.length > 2){
    throw "The amount of arguments given was more than 2"
  }
  if (arguments.length < 2){
    throw "The number of arguments given was less than 2"
  }
  if (typeof animalID !== "string"){
    throw "The animalID argument is needed to be passed in as a string"
  }
  if (typeof postID !== "string"){
    throw "The postID argument is need to be passed in as a string"
  }
  if (typeof animalID === "undefined"){
    throw "need animalID to be provided"
  }
  if (typeof postID === "undefined"){
    throw "need postID to be provided"
  }
  const pokeEV = pokeID(animalID);
  const postEV = pokeID(postID);
  lePoke = await pokemon(); //get the pokemon
  //Do I need to check that the ID actually exists?
  lePokePosts = await posts.read(String(postID))
  if (lePokePosts === null){
    throw "No post exist with that ID"
  }
  //yoinked from Prof hill  code sorry Prof Hill
  updatedLikes = lePoke.updateOne({_id: pokeEV},{$addToSet: {likes: postID}});
  return updatedLikes;
}

async function disliking(animalID,postID){
  //SOMETHING
  if (arguments.length > 2){
    throw "The amount of arguments given was more than 2"
  }
  if (arguments.length < 2){
    throw "The number of arguments given was less than 2"
  }
  if (typeof animalID !== "string"){
    throw "The animalID argument is needed to be passed in as a string"
  }
  if (typeof postID !== "string"){
    throw "The postID argument is need to be passed in as a string"
  }
  if (typeof animalID === "undefined"){
    throw "need animalID to be provided"
  }
  if (typeof postID === "undefined"){
    throw "need postID to be provided"
  }
  const pokeEV = pokeID(animalID);
  const postEV = pokeID(postID);
  lePoke = await pokemon(); //get the pokemon
  //Do I need to check that the ID actually exists?
  lePokePosts = await posts.read(String(postID))
  if (lePokePosts === null){
    throw "No post exist with that ID"
  }
  //yoinked from Prof hill  code sorry Prof Hill
  updatedLikes = lePoke.updateOne({_id: pokeEV},{$pull: {likes: postID}});
  return updatedLikes;
}



module.exports = {
	create,
	getAll,
	get,
	remove,
	rename,
	fullyUpdate,
	liking,
	disliking
}
