const words ={
  Besnik: "The first name of the author",
  Charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm."
}

function checkInput(string){
  if (arguments.length !== 1){
    throw "Only 1 argument can be processed"
  }
  if (typeof(string) === 'string'){
    return string;
  }
  throw "The provided argument is not a string"
}

function lookupDefinition(string){
  checkInput(string);//So this calls the internal previous function
  //But if an error is thrown, does this also throw error
  if (words[string] === undefined){
    throw "The provided word does not exist in dictionary"
  }
  return words[inputVal];
}

function getWord(string){
  checkInput(string);
  let keyholder = Object.keys(words)//creates array of keys
  //console.log(keyholder)
  let LeWord = Object.keys(words).find(key => words[key] === string);

  if (LeWord === undefined){
    throw "The provided Definition does not have a word in the dictionary"
  }
  return LeWord;
}
module.exports = {
  lookupDefinition,
  getWord
};
