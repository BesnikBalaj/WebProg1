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
	const pokeINFO = await pokemon();
	const pokeAniID = pokeID(author);
	const animal = await pokeINFO.findOne({_id:pokeAniID});;
  let post = {
    title: title,
    content: content,
		author: {
			_id: pokeAniID,
			name: animal.name
		}
  };
	const pokeinfo = await postsDex.insertOne(post);
  //https://github.com/stevens-cs546-cs554/CS-546/blob/master/Lectures/lecture_04/code/dogs.js
  if (pokeinfo.insertedCount === 0){
    throw "We couldn't add that post"
  }
	const newpokeId = pokeinfo.insertedId;
	console.log(typeof newpokeId);
	const thingy = {
		_id: newpokeId,
		title:title
	};
	const newPostPokeUpdate = pokeINFO.updateOne({_id: pokeAniID}, {$addToSet: {posts: thingy}});
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
	const lePokePost = await pokeP.findOne({_id:postEV});
	//console.log(lePokePost);
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
	if (newTitle !== undefined){
		if (typeof newTitle !== "string"){
	    throw "The title argument is needed to be passed in as a string"
	  }
		//then I got to update the array
    //then we update le title
		//have id and name
		let oldTitle = possibleP.title;
		const pokeList = await pokemon();
		const posspoke = await pokeList.findOne({_id: possibleP.author._id});
		let i = 0;
		let newArr = [];
		for (i;i < posspoke.posts.length;i++){
			//now gotta do the le find and put it in a new object schema and append that to array THOUGHTS
			if (posspoke.posts[i].title === oldTitle){
				posspoke.posts[i].title = newTitle;
			}
		}
		newArr = posspoke.posts; //have new array equal to that updated one and then just set it
		const posspoke2 = await pokeList.updateOne({_id: possibleP.author._id},{$set:{posts:newArr}});
		//do it slow way rn which is array
		//I believe this should hold the animal with the array that holds the now changed object
    pokeP.updateOne({_id:postEV},{$set: {title: newTitle}});
		//now  we need to update the thingy in the array of that post and I guess for loop
  }
  if (newContent !== undefined){
		if (typeof newContent !== "string"){
	    throw "The content argument is need to be passed in as a string"
	  }
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
	/////now we gotta delete at animal
	let oldTitle = lostPokemon.title;
	const pokeList = await pokemon();
	const posspoke = await pokeList.findOne({_id: lostPokemon.author._id});//need to find animal with author id
	//posspoke is the pokemon that is acquired from post author id
	let i = 0;
	let newArr = [];
	for (i;i < posspoke.posts.length;i++){
		//now gotta do the le find and put it in a new object schema and append that to array THOUGHTS
		if (posspoke.posts[i].title === oldTitle){
			continue; //cause we just don't want it?
		}
		newArr.push(posspoke.posts[i]);
	}
	const posspoke2 = await pokeList.updateOne({_id: lostPokemon.author._id},{$set:{posts:newArr}});
	//pokeP.updateOne({_id:postEV},{$set: {title: newTitle}});
	newArr = posspoke.posts;
  return lostPokemon;
}


module.exports = {
	Create,
	Read,
	Update,
	Delete,
	getAll
}
