const mongoColl = require("./mongoCollections");
const mongoConn = require("./mongoConnection");
const pokemon = require("./todo.js")
const pokeDB= mongoColl.pokemon;


async function main(){
  //Do the testing here
  const db = await mongoConn();
  let task1 = undefined;
  let task2 = undefined;

  console.log("TASK 1")
  try {
    task1 = await pokemon.createTask("Ponder Dinosaurs","Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
    console.log(task1);
  }
  catch (e){
    console.error(e);
  }

  console.log("TASK 2")
  try {
    task2 = await pokemon.createTask("Play Pokemon with Twitch TV","Should we revive Helix? THE ANSWER IS ALWAYS YES!");
    console.log(task2);
  }
  catch (e){
    console.error(e);
  }

  console.log("QUERY ALL")
  try {
    let allOfDem = await pokemon.getAllTasks();
    console.log(allOfDem);
  }
  catch (e){
    console.error(e);
  }

  console.log("REMOVE THE FIRST 1")
  try {
    let byePoke = await pokemon.removeTask(String(task1._id));
    console.log(byePoke);
  }
  catch (e){
    console.error(e);
  }

  console.log("QUERY ALL AGAIN")
  try {
    let allOfDem2 = await pokemon.getAllTasks();
    console.log(allOfDem2);
  }
  catch (e){
    console.error(e);
  }

  console.log("COMPLETE THE SECOND TASK")
  try {
    let praiseLordHelix = await pokemon.completeTask(String(task2._id));
    console.log(praiseLordHelix);
  }
  catch (e){
    console.error(e);
  }

  await db.serverConfig.close();
  console.log("RAWR")
}

main();
