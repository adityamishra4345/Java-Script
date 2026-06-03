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

//to get return value we can use filter
const nums=[1,2,3,4,5,6]
const newnums=nums.filter( (num) => {
    return num>4
})
console.log(newnums)
//eg 2
let ano=[]
nums.forEach( function (num) {        //either function ( num){  }
    if(num>4){                        // or (nums) => {     }
        ano.push(num)
    }
})
console.log(ano)