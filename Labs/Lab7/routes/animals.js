const router = require('express').Router();
const animals = require('../data/animals.js');
const posts = require('../data/posts.js');
/*
POSTS COMMANDS
Create,
Read,
Update,
Delete,
getAll
/*
ANIMAL COMMANDS
create,
getAll,
get,
remove,
rename,
liking,
disliking,
fullyUpdate
*/
async function makeObject(dumbArray){
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

router.get('/', async (req, res) => {
	try{
		const allPokemon = await animals.getAll();
		//console.log(typeof allPokemon);
		//console.log(allPokemon);
		res.json(allPokemon);
	}
	catch(e){
		res.status(404).json({message:"We cannot acquire all the animals"});
	}
});

router.post('/', async (req, res) => {
	try{
		const pokemon = await animals.create(req.body.name, req.body.animalType);
		res.json(pokemon);
	}
	catch(e){
		console.log(e);
		res.status(400).json({message:"The provided JSON was no bueno"});
	}
});

router.get('/:id', async (req, res) => {
	checkID = await animals.get(req.params.id);
	if (checkID === null){
		res.status(404).json({message:"Sadly no post exists with that ID"});
	}
	else{
		try{
			const getPoke = await animals.get(req.params.id);
			/*
			console.log(typeof getPoke);
			console.log(getPoke);
			getPoke.posts = [];
			console.log(getPoke.posts);
			console.log(getPoke);
			*/
			//console.log(typeof getPoke.posts);
			//console.log(getPoke.posts);
			//console.log(typeof getPoke.posts[0]);
			//if (getPoke.posts !== []){
				//Gott do that dumb schema way
				//alright so
				//let newArray = await thingToSwitch(getPoke.posts);
				//console.log('WAIT A MINUTE BRUH')
				//res.status(200).json(getPoke);
			//}
			res.status(200).json(getPoke);
		}
		catch(e){
			res.status(400).json({message:"We cannot acquire that animal with that id"});
		}
	}
});

router.put('/:id', async (req, res) => {
	checkID = await animals.get(req.params.id);

	if (checkID === null){
		res.status(404).json({message:"Sadly no post exists with that ID"});
	}
	else{
		try{
			const updatedPokemon = await animals.fullyUpdate(req.params.id,req.body.newName,req.body.newType);
			res.json(updatedPokemon);
		}
		catch(e){
			console.log(e);
			res.status(400).json({message:"We cannot acquire that animal with that id"});
		}
	}
});

router.delete('/:id', async (req, res) => {
	checkID = await animals.get(req.params.id);
	if (checkID === null){
		res.status(404).json({message:"Sadly no post exists with that ID"});
	}
	else{
		try{
			const deletedPokemon = await animals.remove(req.params.id);
			res.json(deletedPokemon);
		}
		catch(e){
			console.log('RAWR')
			console.log(e);
			res.status(400).json({message:"We cannot acquire that animal with that id"});
		}
	}
});

module.exports = router;
