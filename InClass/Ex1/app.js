const dic = require("./dictionary")

try {
    console.log(dic.lookupDefinition("programming"))
}catch (error){
    console.log(error)
}

try {
    console.log(dic.lookupDefinition())
}catch (error){
    console.log(error)
}

try {
    console.log(dic.getWord("programming"))
}catch (error){
    console.log(error)
}

try {
    console.log(dic.getWord(1))
}catch (error){
    console.log(error)
}

try {
    console.log(dic.getWord("The first name of the author"))
}catch (error){
    console.log(error)
}

try{
    console.log(dic.getWord("A personal magic of leadership arousing special popular loyalty or enthusiasm."))
}catch (error){
    console.log(error)
}
