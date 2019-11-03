function isNumberPrime(number){
  if (arguments.length < 1){
    alert("Too little arguments given");
    throw "There was no number given by this argument";
  }
  if (arguments.length > 1){
    alert("Too many arguments given");
    throw "There was too many arguments given";
  }
  if (Number.isNaN(number)){
    //if id is not a numver
    alert("The input given is not a number, please put in a number")
    throw "The number given is not a number and can't be used";
  }
  if( typeof(number) !== "number"){
		alert("Eyo buddy, Idk how you did it, but stop trying to provide a non number");
		throw "Number given is not a number";
	}
  if (!Number.isInteger(number)){
    alert("We are unable to do a Prime check on a non interger number")
    throw "The number given is not an integer";
  }
  if(number < 0){
    alert("The number must be positive");
    throw "Number given is negative";
  }
  if (number === 1){
    //0 is no bueno
    return false;
  }
  for(var i = 2; i < number; i++){
    if(number % i === 0) {
      return false;
    }
  }
  return true;
}

const main = () => {
  const leForm = document.getElementById("odd-even");
  leForm.addEventListener("submit",event => {
    event.preventDefault();
    const valueGrab = parseInt(document.getElementById("Number").value);
    //may need to check the top part to see
    console.log(valueGrab);
    const ifPrime = isNumberPrime(valueGrab);
    if(ifPrime === true){
      //if we found a PRIME
      var node = document.createElement("li");
      var text = document.createTextNode(valueGrab + " is Truly a Prime Number young Torts");
      node.classList.add("is-prime");
      node.appendChild(text);
      document.getElementById("attempts").appendChild(node);
    }
    else{
      //THE NUMBER IS NOT A PRIME
      var node = document.createElement("li");
      var text = document.createTextNode(valueGrab + " is Truly not a Prime Number young Torts");
      node.classList.add("not-prime");
      node.appendChild(text);
      document.getElementById("attempts").appendChild(node);
    }
  })
}


main();
