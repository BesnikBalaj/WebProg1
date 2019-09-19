//const axios = require('axios');
const people = require("./people");
const weather = require("./weather");
async function main(){
    try{
        const peopledata = await people.getPeople()
        const ans = await people.getPersonById(43)
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 2')
        const peopledata = await people.getPeople()
        const ans = await people.lexIndex(2)
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 3')
        const peopledata = await people.getPeople()
        const ans = await people.firstNameMetrics()
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 4')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await weather.shouldTheyGoOutside("Scotty", "Barajaz")
        console.log (ans)
    }catch(e){
        console.log (e);
    }
}

//call main
main()
