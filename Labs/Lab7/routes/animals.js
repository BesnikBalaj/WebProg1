const router = require('express').Router();
const animals = require('../data/animals.js');
/*
create,
getAll,
get,
remove,
rename,
liking,
disliking,
fullyUpdate
*/
router.get('/', async (req, res) => {
	try{
		const allPokemon = await animals.getAll();
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
			res.status(400).json({message:"We cannot acquire that animal with that id"});
		}
	}
});

module.exports = router;
