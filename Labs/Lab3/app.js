//const axios = require('axios');
const people = require("./people");
const weather = require("./weather");
const work = require("./work")
async function main(){
    try{
        console.log('TEST 1')
        const peopledata = await people.getPeople()
        const ans = await people.getPersonById(43)
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 1_1')
        const peopledata = await people.getPeople()
        const ans = await people.getPersonById(-1)
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 1_2')
        const peopledata = await people.getPeople()
        const ans = await people.getPersonById(1000)
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 1_3')
        const peopledata = await people.getPeople()
        const ans = await people.getPersonById()
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 1_4')
        const peopledata = await people.getPeople()
        const ans = await people.getPersonById('String')
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 1_5')
        const peopledata = await people.getPeople()
        const ans = await people.getPersonById([5,6,7])
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 1_6')
        const peopledata = await people.getPeople()
        const ans = await people.getPersonById({'Rawr':'Raw'})
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 1_7')
        const peopledata = await people.getPeople()
        const ans = await people.getPersonById(undefined)
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
        console.log('TEST 2_1')
        const peopledata = await people.getPeople()
        const ans = await people.lexIndex(1)
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 2_2')
        const peopledata = await people.getPeople()
        const ans = await people.lexIndex(-2)
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 2_3')
        const peopledata = await people.getPeople()
        const ans = await people.lexIndex(2000)
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 2_4')
        const peopledata = await people.getPeople()
        const ans = await people.lexIndex()
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 2_5')
        const peopledata = await people.getPeople()
        const ans = await people.lexIndex([5,3,6])
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 2_6')
        const peopledata = await people.getPeople()
        const ans = await people.lexIndex(undefined)
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
        console.log('TEST 3_1')
        const peopledata = await people.getPeople()
        const ans = await people.firstNameMetrics(5)
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 3_2')
        const peopledata = await people.getPeople()
        const ans = await people.firstNameMetrics(-1)
        console.log ('work')
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 3_3')
        const peopledata = await people.getPeople()
        const ans = await people.firstNameMetrics(1000)
        console.log ('work')
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 3_4')
        const peopledata = await people.getPeople()
        const ans = await people.firstNameMetrics(undefined)
        console.log ('work')
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 3_5')
        const peopledata = await people.getPeople()
        const ans = await people.firstNameMetrics([5,4,3,2])
        console.log ('work')
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

    try{
        console.log('TEST 4_1')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await weather.shouldTheyGoOutside("Calli", "Ondrasek")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 4_2')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await weather.shouldTheyGoOutside("Calli")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 4_3')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await weather.shouldTheyGoOutside("Calli", "Ondrasek","Extra")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 4_4')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await weather.shouldTheyGoOutside()
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 4_5')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await weather.shouldTheyGoOutside("tommy", "smith")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 4_6')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await weather.shouldTheyGoOutside(undefined, undefined)
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 4_7')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await weather.shouldTheyGoOutside("[5,4,3]", 6)
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 4_8')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await weather.shouldTheyGoOutside("[3,4]", "[9,8]")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 5')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.whereDoTheyWork("Demetra", "Durrand")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 5_1')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.whereDoTheyWork("Hank", "Tarling")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 5_2')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.whereDoTheyWork("Hank")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 5_3')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.whereDoTheyWork("", "Tarling")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 5_4')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.whereDoTheyWork("Hank", "")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 5_5')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.whereDoTheyWork("Bob", "Smith")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 5_6')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.whereDoTheyWork("6", 6)
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 5_7')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.whereDoTheyWork("6", "6")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 5_8')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.whereDoTheyWork("Demetra", "Tarling")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 5_9')
        const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.whereDoTheyWork(6, "Tarling")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 6')
        //const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.findTheHacker("79.222.167.180")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 6_1')
        //const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.findTheHacker("79222.167.180")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 6_2')
        //const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.findTheHacker("83.133.174.10")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 6_3')
        //const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.findTheHacker("foobar")
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 6_4')
        //const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.findTheHacker()
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 6_5')
        //const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.findTheHacker(6)
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 6_6')
        //const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.findTheHacker([6,5,4,3])
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 6_7')
        //const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.findTheHacker({"Rawr":raw})
        console.log (ans)
    }catch(e){
        console.log (e);
    }

    try{
        console.log('TEST 6_8')
        //const peopledata = await people.getPeople()
        const weatherdata = await weather.getWeather()
        const ans = await work.findTheHacker(undefined)
        console.log (ans)
    }catch(e){
        console.log (e);
    }
}

//call main
main()
