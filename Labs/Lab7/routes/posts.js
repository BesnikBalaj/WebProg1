const router = require('express').Router();
const posts = require('../data/posts.js');

/*
Create,
Read,
Update,
Delete,
getAll
*/
/*

if (!(await doesPostExist(req.params.id))) {
		res.status(404).json({ error: 'Post does not exist', id: req.params.id });
		return;
	}*/

router.get('/', async (req, res) => {
	try {
		const allPosts = await posts.getAll();
		res.json(allPosts);
	}
	catch (e) {
		console.log(e);
		res.status(500).json({ message:"We could not get all the posts"});
	}
});

router.post('/', async (req, res) => {
	try {
		const newPost = await posts.Create(req.body.title,req.body.author,req.body.content);
		res.status(200).json(newPost);
	}
	catch (e) {
		console.log(e);
		res.status(400).json({message:"We could not create the post"});
	}
});

router.get('/:id', async (req, res) => {
	try{
		const getPost = await posts.Read(req.params.id);
		res.status(200).json(getPost);
	}
	catch(e){
		console.log(e);
		res.status(404).json({message:"We could not get that post with that ID"});
	}
});

router.put('/:id', async (req, res) => {
	checkID = await posts.Read(req.params.id);
	if (checkID === null){
		res.status(404).json({message:"Sadly no post exists with that ID"});
	}
	else{
		try{
			const updatedPost = await posts.Update(req.params.id,req.body.newTitle,req.body.newContent);
			res.json(updatedPost);
		}
		catch(e){
			console.log(e);
			res.status(400).json({message:"We could not update the post"});
		}
	}
});

router.delete('/:id', async (req, res) => {
	checkID = await posts.Read(req.params.id);
	if (checkID === null){
		res.status(404).json({message:"Sadly no post exists with that ID"});
	}
	else{
		try{
			const deletedPost = await posts.Delete(req.params.id);
			res.json(deletedPost);
		}
		catch(e){
			console.log(e);
			res.status(400).json({message:"We could not delete the post"});
		}
	}
});

module.exports = router;
