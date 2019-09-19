//I pledge my honor that I have abided by the Stevens Honor System" - Besnik Balaj
//Use Number.isNaN from Rachel Kim Supplied Link in Slack
function head(arr) {
  //check if arr is undefined or not
  if (arguments.length !== 1){
    throw "The provided arguments are either more than 1 or nothing was given"
  }
  //first check if array exists,
  if (!Array.isArray(arr)){
     throw "The provided argument isn't an array."
  }
  //check array length
  if (arr.length < 1){
    throw "The array provided is empty, can't return the head value"
  }
  return arr[0];
}

function last(arr) {
  //its same checks as top but different final return
  //check if arr is undefined or not
  if (arguments.length !== 1){
    throw "The provided arguments are either more than 1 or nothing was given"
  }
  //first check if array exists,
  if (!Array.isArray(arr)){
     throw "The provided argument isn't an array."
  }
  //check array length
  if (arr.length < 1){
    throw "The array provided is empty, can't return the last value"
  }
  return arr[arr.length-1];
}

function remove(array, index) {
  //its same checks as top but different final return
  //check if arr is undefined or not
  if (arguments.length !== 2){
    throw "The provided arguments either surpass the amount needed or is too little"
  }
  //first check if array exists and is array,
  if (!Array.isArray(array)){
     throw "The provided argument isn't an array."
  }
  //check array length
  if (array.length < 1){
    throw "The array provided is empty, can't remove the index"
  }
  //check if index is actually a number
  if (Number.isNaN(index)){
    throw "The index given is not a number, therefore not an index"
  }
  //check that index is between 0 and length of array
  if (index < 0 || index > array.length){
    throw "Index is out of range of given array"
  }
  array.splice(index,1);
  return array;
}

function range(end,value) {
  //check if no arguments or more than 2 are given since Val doesn't need to be given
  if (arguments.length > 2 || arguments.length < 1){
    throw "The provided arguments either surpass the amount needed or is too little"
  }
  //check if end is actually a number
  //console.log(typeof end)
  //console.log(Number.isNan(end))
  //if(Array.isArray(end)){
    //throw "No arrays allowed"
  //}
  if (Number.isNaN(end) || typeof end !== 'number'){
    throw "The provided upper limit or end is not a number"
  }

  if (!Number.isInteger(end)){
    throw "The provided end is not an integer"
  }
  //check is end is 0 or negative
  if (end <= 0){
    throw "the end value can't be 0 or a negative number"
  }
  let i = 0;
  let res = [];
  for (;i<end;i++){
    //console.log(end)
    if (arguments.length === 2){
      res.push(value);
    }
    else {
      res.push(i);
    }
  }
  return res;
}

function countElements(array){
  if (arguments.length !== 1){
    throw "The provided arguments either surpass the amount needed or is too little"
  }
  //first check if array exists and is array,
  //if (!Array.isArray(array)){
  //   throw "The provided argument isn't an array."
  //}
  const res = {};
  //let i = 0; not outside
  //check array length
  if (array.length < 1){
    return res;
  }
  array.sort();//to sort the array for us
  let i = 0; //for for loop
  let wrd = array[0];
  let cnt = 1; //if array isn't smaller than 1, and we set first key already, count starts as 1
  //console.log(array);
  for (;i<=array.length;i++){
    //console.log(wrd)
    //console.log(res)
    //console.log('the index is '+i)
    if (i === array.length-1){ //better than checking for out of bound
      res[wrd] = cnt; //had a weird bug but not really, if I just had array.length there it would still work
      return res;
    }
    else if (array[i] === array[i+1]){
      cnt = cnt + 1;
    }
    else {
      //this is the next term isn't the last and is different from current
      res[wrd] = cnt;
      cnt = 1;
      wrd = array[i+1];
      //console.log(wrd)
    }
  }
}

function isEqual(arrayOne, arrayTwo){
  if (arguments.length !== 2){
    throw "The provided arguments either surpass the amount needed or is too little"
  }
  //first check if array exists and is array,
  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)){
     throw "The provided argument isn't an array for one of these."
  }
  if (arrayOne.length !== arrayTwo.length){
    //throw "The lengths of the arrays don't match, can't possibly "
    return false;
  }
  let i = 0;
  for (;i<arrayOne.length;i++){
    if (arrayOne[i] !== arrayTwo[i]){
      return false;
    }
  }
  return true;
}


module.exports ={
  head,
  last,
  remove,
  range,
  countElements,
  isEqual
};
