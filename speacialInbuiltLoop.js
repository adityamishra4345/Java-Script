const coding=["js","ruby","java","python"]
//calback(complete function passed as paramenter and called later ) function, mind the syntax
coding.forEach( function (items){
    console.log(`${items} is a programing language`)
} )
//foreach loops return undefined always
//calback actual meaning
function print(items){
    console.log("hii")
}
coding.forEach(print)//dont print() as we are passing fn as argument and not calling 
//it will be called when foreach fn executed

coding.forEach( function (items,index,arr){
    console.log(items,index,arr)
} )
//foreach loop has access to items of array , there index and complete array and 
//we can use any we wanna
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]//array of objects (three objects as elements in an array)

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )