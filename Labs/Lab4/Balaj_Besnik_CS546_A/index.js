//testing purposes
const mongoColl = require("./mongoCollections");
const mongoConn = require("./mongoConnection");
const pokemon = require("./data/animals.js")
const pokeDB= mongoColl.pokemon;


//Pure Testing
//
    // == Create an animal named Sasha with the type of Dog
    // == Log the newly created animal
    // == Create an animal named Lucy, with the type of Dog
    // == Query all animals, and log them all
    // == Create an animal named Duke, with a type of Walrus
    // == Log the newly created Duke
    // == Rename Sasha to Sashita
    // == Log the newly named Sashita
    // == Remove Lucy
    // == Query all animals, and log them all
//

async function main() {
  //Rawr
  const db = await mongoConn();

  //Create an animal named Sasha with the type of Dog
  try {
    let Sasha = await pokemon.create("Sasha","Dog");
    let SashaGet = await pokemon.get(String(Sasha._id));
    console.log(SashaGet); //log the newly created animal
  }
  catch (e){
    console.error(e);
  }


//// == Create an animal named Lucy, with the type of Dog
  try {
    let Lucy = await pokemon.create("Lucy","Dog");
    console.log(Lucy); //log the newly created animal
  }
  catch (e){
    console.error(e);
  }
  //Query all animals, and log them all
  try {
    let CurrentAnimals = await pokemon.getAll();
    console.log(CurrentAnimals); //log the newly created animal
  }
  catch (e){
    console.error(e);
  }
 //Create an animal named Duke, with a type of Walrus
  try {
    let Duke = await pokemon.create("Duke","Walrus");
    console.log(Duke); //log the newly created animal
  }
  catch (e){
    console.error(e);
  }

  try {
    let newLucy = await pokemon.create("Lucy","Dog");
    console.log('Let us put in a new Lucy and remove her')
    //console.log(newLucy)
    //console.log("Hello?")
    let removedL = await pokemon.remove(String(newLucy._id));
    //console.log(removedL); //log the newly created animal
  }
  catch (e){
    console.error(e);
  }

  try {
    let newSasha = await pokemon.create ("Sasha","Dog")
    let Sashita = await pokemon.rename(String(newSasha._id),"Sashita");
    console.log(Sashita); //log the newly created animal
  }
  catch (e){
    console.error(e);
  }

  try {
    let newCurrentpokemon = await pokemon.getAll();
    console.log(newCurrentpokemon); //log the newly created animal
  }
  catch (e){
    console.error(e);
  }

  ////////////////////////////////////////////
  console.log('Time to begin the error checking')
  console.log('Let us start with making errors and checking them in create')
  console.log('Test create 1')
  try {
    let Sasha = await pokemon.create("Dog");
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Test create 2')
  try {
    let Sasha = await pokemon.create();
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Test create 3')
  try {
    let Sasha = await pokemon.create("Dog",6);
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Test create 4')
  try {
    let Sasha = await pokemon.create("Dog",6,7);
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Test create 5')
  try {
    let Sasha = await pokemon.create("Dog");
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test create 6')
  try {
    let Sasha = await pokemon.create([25,7,8],"Dog");
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test create 7')
  try {
    let Sasha = await pokemon.create("Dog",[6,7,8]);
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Time to do the get error checking')
  console.log('Test get 1')
  try {
    let Sasha = await pokemon.get([25,7,8]);
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test get 2')
  try {
    let Sasha = await pokemon.get();
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test get 3')
  try {
    let Sasha = await pokemon.get('[25,7,8]','RAWRING');
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test get 4')
  try {
    let Sasha = await pokemon.get('5d8d4c8b8314fdb8e0a7b8a9');
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test get 5')
  try {
    let Sasha = await pokemon.get(5);
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Time to do the remove error checking')
  console.log('Test remove 1')
  try {
    let Sasha = await pokemon.remove([25,7,8]);
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test remove 2')
  try {
    let Sasha = await pokemon.remove();
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test remove 3')
  try {
    let Sasha = await pokemon.remove('[25,7,8]','RAWRING');
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test remove 4')
  try {
    let Sasha = await pokemon.remove('5d8d4c8b8314fdb8e0a7b8a9');
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test remove 5')
  try {
    let Sasha = await pokemon.remove(5);
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Test rename 1')
  try {
    let Sasha = await pokemon.rename("Dog");
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Test rename 2')
  try {
    let Sasha = await pokemon.rename();
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Test rename 3')
  try {
    let Sasha = await pokemon.rename("Dog",6);
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Test rename 4')
  try {
    let Sasha = await pokemon.rename("Dog",6,7);
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }

  console.log('Test rename 5')
  try {
    let Sasha = await pokemon.rename("Dog");
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test rename 6')
  try {
    let Sasha = await pokemon.rename([25,7,8],"Dog");
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }
  console.log('Test rename 7')
  try {
    let Sasha = await pokemon.rename('5d8d4c8b8314fdb8e0a7b8a9',"Dog");
    console.log(Sasha); //log the newly created animal
  }
  catch (e){
    console.error(e)
  }

  await db.serverConfig.close();
  console.log("RAWR")
}

//call main
main(); //We should just call it
