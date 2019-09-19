//I pledge my honor that I have abided by the Stevens Honor System" - Besnik Balaj

function extend(...args){
  //How do I check these arguments
  if (arguments.length < 2){
    throw "Need at least 2 arguments for this function to perform"
  }
  let i = 0;
  for (;i < arguments.length;i++){
    //console.log(arguments[i]);
    if (arguments[i] === undefined){
      throw "One arguments given is undefined, can't work with it"
    }
    if (typeof arguments[i] !== 'object'){
      throw "One argument given is not an object"
    }
  }
  const res = {};

  let j = 0;
  for (;j < arguments.length;j++){//parse through objects in args
    //console.log(arguments[j])
    let l = Object.keys(arguments[j]);// l = [,,,] like of just keys
    //console.log(l)
    if (j === 0){
      let k = 0;
      for (;k < l.length;k++){
        //console.log(arguments[0].x)
        //console.log(arguments[j].l[k]);
        //console.log(l[0])
        res[l[k]]=arguments[j][l[k]]; //res[keyL index k] = argument[j].
      }
      //return res; was just for debug
    }
    else {
      let i = 0;
      for (;i < l.length;i++){
        //Check if key exist already in res and add normal if not or add
        //console.log('the index i here is ' + i)
        if (l[i] in res){
          //I MISREAD THE DAMN FUNCTION
          //console.log(l)
          //console.log(l[i]);
          //console.log("Rawr")
          let sum = 0;
          //console.log(res[l[i]])
          //console.log('RAWR')
          //console.log(arguments[j])
          //console.log(arguments[j][l[i]]);
          sum = res[l[i]] + arguments[j][l[i]]
          //console.log('The Sum is: ' + sum)
          //res[l[i]] = sum;
          //console.log('RAWR' + sum)
          //return res;
        }
        else{
          //outside that damn if statement
          res[l[i]] = arguments[j][l[i]]
        }
      }
    }
  }
  return res;
}

function smush(...args){
  //How do I check these arguments
  if (arguments.length < 2){
    throw "Need at least 2 arguments for this function to perform"
  }
  let i = 0;
  for (;i < arguments.length;i++){
    //console.log(arguments[i]);
    if (arguments[i] === undefined){
      throw "One arguments given is undefined, can't work with it"
    }
    if (typeof arguments[i] !== 'object'){
      throw "One argument given is not an object"
    }
  }
  const res = {};

  let j = 0;
  for (;j < arguments.length;j++){//parse through objects in args
    //console.log(arguments[j])
    let l = Object.keys(arguments[j]);// l = [,,,] like of just keys
    //console.log(l)
    if (j === 0){
      let k = 0;
      for (;k < l.length;k++){
        //console.log(arguments[0].x)
        //console.log(arguments[j].l[k]);
        //console.log(l[0])
        res[l[k]]=arguments[j][l[k]]; //res[keyL index k] = argument[j].
      }
      //return res; was just for debug
    }
    else {
      let i = 0;
      for (;i < l.length;i++){
        //Check if key exist already in res and add normal if not or add
        //console.log('the index i here is ' + i)
        if (l[i] in res){
          //I MISREAD THE DAMN FUNCTIOn
          //console.log(l)
          //console.log(l[i]);
          //console.log("Rawr")
          let sum = 0;
          //console.log(res[l[i]])
          //console.log('RAWR')
          //console.log(arguments[j])
          //console.log(arguments[j][l[i]]);
          res[l[i]] = arguments[j][l[i]]
          //console.log('The Sum is: ' + sum)
          //res[l[i]] = sum;
          //console.log('RAWR' + sum)
          //return res;
        }
        else{
          //outside that damn if statement
          res[l[i]] = arguments[j][l[i]]
        }
      }
    }
  }
  return res;
}

function mapValues(object,func){
  //How do I check these arguments
  if (arguments.length !== 2){
    throw "Need 2 arguments for this function to perform"
  }
  if (typeof object !== 'object'){
    throw "One argument given is not an object"
  }
  if (typeof func !== 'function'){
    throw "Func argument is not an actual function"
  }
  const res = {};
  let i = 0;
  let keys = Object.keys(object);
  //console.log(keys)
  for (;i<keys.length;i++){
    let sum = 0;
    sum = func(Object.values(object)[i]);
    //console.log(keys[i])
    //console.log(sum)
    res[keys[i]]=sum;
  }
  return res;
}

module.exports ={
  extend,
  smush,
  mapValues
};
