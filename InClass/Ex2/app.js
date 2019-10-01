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
    let allOfDem = await pokemon.getTaskAllTasks();
    console.log(allOfDem);
  }
  catch (e){
    console.error(e);
  }

  console.log("completeTask THE FIRST 1")
  try {
    let byePoke = await pokemon.completeTaskTask(String(task1._id));
    console.log(byePoke);
  }
  catch (e){
    console.error(e);
  }

  console.log("QUERY ALL AGAIN")
  try {
    let allOfDem2 = await pokemon.getTaskAllTasks();
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
  console.log('Test createTask 1')
  try {
    let DanielJones = await pokemon.createTask("Dog");
    console.log(DanielJones); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Test createTask 2')
  try {
    let Furret = await pokemon.createTask();
    console.log(Furret); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Test createTask 3')
  try {
    let Christmas = await pokemon.createTask("Dog",6);
    console.log(Christmas); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Test createTask 4')
  try {
    let Thanksgiving = await pokemon.createTask("Dog",6,7);
    console.log(Thanksgiving); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Test createTask 5')
  try {
    let Basil = await pokemon.createTask("Dog");
    console.log(Basil); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test createTask 6')
  try {
    let Tomato = await pokemon.createTask([25,7,8],"Dog");
    console.log(Tomato); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test createTask 7')
  try {
    let meatballs = await pokemon.createTask("Dog",[6,7,8]);
    console.log(meatballs); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Time to do the getTask error checking')
  console.log('Test getTask 1')
  try {
    let Rosemary = await pokemon.getTask([25,7,8]);
    console.log(Rosemary); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test getTask 2')
  try {
    let JackDaniels = await pokemon.getTask();
    console.log(JackDaniels); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test getTask 3')
  try {
    let Bidoof = await pokemon.getTask('[25,7,8]','RAWRING');
    console.log(Bidoof); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test getTask 4')
  try {
    let Linguini = await pokemon.getTask('5d8d4c8b8314fdb8e0a7b8a9');
    console.log(Linguini); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test getTask 5')
  try {
    let ButterNutSquash = await pokemon.getTask(5);
    console.log(ButterNutSquash); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Time to do the completeTask error checking')
  console.log('Test completeTask 1')
  try {
    let BadaBing = await pokemon.completeTask([25,7,8]);
    console.log(BadaBing); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test completeTask 2')
  try {
    let BadaBomb = await pokemon.completeTask();
    console.log(BadaBomb); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test completeTask 3')
  try {
    let BadaBoom = await pokemon.completeTask('[25,7,8]','RAWRING');
    console.log(BadaBoom); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test completeTask 4')
  try {
    let SomeAreMoreEqualThanOthers = await pokemon.completeTask('5d8d4c8b8314fdb8e0a7b8a9');
    console.log(SomeAreMoreEqualThanOthers); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test completeTask 5')
  try {
    let Giants = await pokemon.completeTask(5);
    console.log(Giants); //log the newly createTaskd animal
  }
  catch (e){
    console.error(e)
  }


  await db.serverConfig.close();
  console.log("RAWR")
}

main();
