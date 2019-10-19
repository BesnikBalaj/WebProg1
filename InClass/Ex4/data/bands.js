const mongoCollections = require('../config/mongoCollections');
const bands = mongoCollections.bands;
const bandID = require("mongodb").ObjectID;

let exportedMethods = {
  getAllBands() {
    const bandsCollections = await bands();
    const leBands = await bandsCollections.find({}).toArray();
    return bandsCollections;
  },
  getBandById(id) {
    if (typeof id !== "number"){
      throw "Boy this id is not a number, can't use it";
    }
    const bandsCollections = await bands();
    const leBand = await bandsCollections.findOne({_id: id});

    if (!movie) {
      throw 'We sadly could not find a band with that ID'
    }
    return leBand;
  },
  addBand(bandName, bandMembers, yearFormed, genres, recordLabel) {
    if (!bandName || !bandMembers || !yearFormed || !genres || !recordLabel){
      throw "One of the provided parameters is missing";
    }
    if (typeof bandName !== "string"){
      throw "Name of band must be a string";
    }

    if (typeof recordLabel !== "string"){
      throw "Name of recordLabel must be a string";
    }

    if (typeof yearFormed !== "number"){
      throw "The year they are formed must be a number"
    }
    if (yearFormed < 1900 || yearFormed > 2019) {
      throw "The range is far out for the yearFormed"
    }

    if (!Array.isArray(genres)){
      throw "The genres parameter must be an array"
    }

    if(genres.length === 0){
      throw "The genres is empty"
    }

    if (!Array.isArray(bandMembers)){
      throw "band member list must be an array of objects pls";
    }

    if(bandMembers.length === 0){
      throw "The bandMembers are empty"
    }

    let newBand = {
      bandName: bandName,
      bandMembers:bandMembers,
      yearFormed: yearFormed,
      genre: genres,
      recordLabel: recordLabel
    }

    const bandsCollections = await bands();
    const bandinfo = await bandsCollections.insertOne(newBand);
    if (bandinfo.insertedCount === 0){
      throw "We could not add in that Band"
    }
    const newBandId = bandinfo.insertedId;
    return newBand

    /*
      TODO:  Add a band.  Be sure to check all input for proper TYPE, make sure input is THERE and VALID etc..
      bandName = string (can't be empty, undefined, null, a number etc..)
      bandMembers = array of objects that contain band members first name and last name (can't be empty, undefined, null etc.. MUST have at least one band member)
       [ {
          firstName,
          lastName
        }]
      yearFormed = number year the band formed (can't be empty, undefined, null, must be greater than or equal to 1900 less than 2019)
      genres = array with at LEAST one element (can't be empty, undefined, null etc..)
      recordLabel = string of the name of their record label (can't be empty, undefined, null etc..)

      ex object:

      {
        bandName: "Pink Floyd",
        bandMembers: [
          {firstName: "Roger", lastName: "Waters"},
          {firstName: "David", lastName: "Gilmour"},
          {firstName: "Nick", lastName: "Mason"},
          {firstName: "Richard", lastName: "Wright"},
          {firstName: "Syd", lastName: "Barrett"}
        ],
        yearFormed: 1965,
        genre: ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
        recordLabel: "EMI"
      }

      The function will return the newly inserted band, throw an error if the document cannot be inserted.
    */
  },
  removeBand(id) {
    // TODO: Removes a band from the DB, return the list of all bands once band has been deleted (call getAllBands())
    // id is a string/object ID, it cannot be blank, cannot be null, cannot be undefined, must be present
    // If not found or not removed, throw an error.
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

    const truBandID = bandID(id);
    const bandsInfo = await bands();

    //const bandgobyebye = await bandsInfo.findOne({_id: truBandID});
    const bandnowgobyebye = await bandsInfo.removeOne({_id: truBandID});
    if (bandnowgobyebye.deletedCount === 0){
      "We sadly can't delete a band with that given id"
    }
    getAllBands();
  },
  searchBandByName(bandName) {
    /*
      bandName = string, can't be blank, null, undefined, a number.. etc...
      TODO: You will search the band name for the name supplied.  You will return wildcard matches..
      for example:  searchBandByName("Pink") would return "Pink Floyd", "Pink" or any band that had pink in it's name

      You will need to use a RegEx for this.  like so:
      let regex = new RegExp([".*", bandName, ".*"].join(""), "i");
      and then in your find query use the regex.  {"bandName": regex}

       If there are no bands found with that member then throw an error.
    */
    if (typeof bandName !== "string"){
      throw "bandName provided is not a string"
    }
    if (!bandName){
      throw "bad type for this"
    }
    let regex = new RegExp([".*", bandName, ".*"].join(""), "i");
    const bandsInfo = await bands();
    const poke = await bandsInfo.find({'bandName': regex}).toArray();

    if (poke.length === 0){
      throw "There was no band with that name, Wildcard or naught"
    }
    return poke
  },
  searchBandMemberFullName(firstName, lastName) {
    /*
      TODO: You will search bands by band members for the input supplied.
      This needs to be an exact match so YOU WILL NEED TO USE AN LOGICAL AND for this. .

      You will return a list of bands where that person is a band member.
      for example:  Corey Taylor is the singer for Slipknot and for Stone Sour.  If both of those bands exist in your DB
      and Corey Taylor is supplied then both bands would be returned.

      If there are no bands found with that member then throw an error.
    */
    if (typeof firstName !== "string" || typeof lastName !== "string"){
      throw "these names are not strings"
    }
    const bandsInfo = await.bands();
    let apples = await bandsInfo.find({''})

  },
  searchBandMember(name) {
    /*
      TODO: You will search bands by band members for the input supplied.  You will return wildcard matches..
      YOU WILL NEED TO USE AN LOGICAL OR for this.
      for example:  searchBandMember("David") would return the band objects Pink Floyd (David Gilmour is a member), Van Halen (David Lee Roth is a member)
      or any band that had David in their first or last name.  supplying "dav" should also return
      You will need to use a RegEx for this.  like so:
      let regex = new RegExp([".*", name, ".*"].join(""), "i");
      and then in your find query use the regex.  {"bandName": regex}
      .find({  $or: [{ "firstName": regex },{ "lastName": regex } }] }).toArray();

      You will return a list of bands where that person is a band member.
      for example:  David would return the objects Pink Floyd and Van Halen (if those bands were in your DB)
    */
  },
  searchBandByGenre(genre) {
    /*
      TODO: This will return an array of objects of bands where the genre passed in matches one of the genres
      YOU WILL NEED TO USE MONGO's $in for the query...

      Throw an error if no bands found
    */
    const bandsInfo = await bands();
    let java = await bandsInfo.find({'genre':{$in: genre}}).toArray();
    if (java.length === 0){
      throw "No genres or bands wit dem";
    }
    return java
  },
  searchBandByYear(year) {
    /*
      TODO: This will return an array of objects of bands that were formed in the year supplied

      Throw an error if no bands found
    */
    if (typeof year !== "number"){
      throw "Year is not a number"
    }
    const bandsInfo = await bands();
    let cplspls = await bandsInfo.find({'year':year}).toArray();
    if (cplspls.length === 0){
      throw "No genres or bands wit dem";
    }
    return cplspls

  },
  searchBandFormedBefore(year) {
    /*
      TODO: This will return an array of objects of bands that were formed before in the year supplied $lt in mongo

      Throw an error if no bands found
    */
    if (typeof year !== "number"){
      throw "Year is not a number"
    }
    const bandsInfo = await bands();
    let cplspls = await bandsInfo.find({'year':{$lt: year}}).toArray();
    if (cplspls.length === 0){
      throw "No genres or bands wit dem";
    }
    return cplspls
  },
  searchBandFormedOnOrBefore(year) {
    /*
      TODO: This will return an array of objects of bands that were formed on or before in the year supplied $lte in mongo

      Throw an error if no bands found
    */
    if (typeof year !== "number"){
      throw "Year is not a number"
    }
    const bandsInfo = await bands();
    let cplspls = await bandsInfo.find({'year':{$lte: year}}).toArray();
    if (cplspls.length === 0){
      throw "No genres or bands wit dem";
    }
    return cplspls
  },
  searchBandFormedAfter(year) {
    /*
      TODO: This will return an array of objects of bands that were formed After in the year supplied $gt in mongo

      Throw an error if no bands found
    */
    if (typeof year !== "number"){
      throw "Year is not a number"
    }
    const bandsInfo = await bands();
    let cplspls = await bandsInfo.find({'year':{$gt: year}}).toArray();
    if (cplspls.length === 0){
      throw "No genres or bands wit dem";
    }
    return cplspls

  },
  searchBandFormedOnOrAfter(year) {
    /*
      TODO: This will return an array of objects of bands that were formed on or after in the year supplied $gte in mongo

      Throw an error if no bands found
    */
    if (typeof year !== "number"){
      throw "Year is not a number"
    }
    const bandsInfo = await bands();
    let cplspls = await bandsInfo.find({'year':{$gte: year}}).toArray();
    if (cplspls.length === 0){
      throw "No genres or bands wit dem";
    }
    return cplspls
  },
  addBandMember(bandId, firstName, lastName) {
    /*
      TODO: This will add a new band member object to the bandMember array
      it will return the band with the newly added member.  DO NOT ALLOW duplicates! $addToSet in Mongo...

      Throw an error if the member cannot be added
    */
  },
  removeBandMember(bandId, firstName, lastName) {
    /*
      TODO: This will remove a band member object to the bandMember array
      it will return the band with the newly removed member.

      Throw an error if the member cannot be removed
    */
  }
};

module.exports = exportedMethods;
