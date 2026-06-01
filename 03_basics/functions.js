function adi(){
    console.log("a")
    console.log("d")
    console.log("i")
    console.log("t")
    console.log("y")
    console.log("a")
}
// adi()

function sum(num1,num2){
    return num1+num2
}
let res=sum("5",7)//gives 57 if sum(5,7) then gives 12
console.log("sum is : ",res)

function login(user="sam"){//if no argument passes when called then it will be default i.e sam here
    return `${user} just logged in`
}
console.log(login("adi"))//if nothing is passed in functio then it will be undefined

function multientries(...num){
    return num
}
console.log(multientries(1,2,3,4,5,6,7))


//Passing objects to a function
const user={
    name:"bag",
    id:"323634",
    price:100
}
function sales(item){
    return `Item is ${item.name} and price is ${item.price}`
}
console.log(sales(user))

//direct passing
console.log(sales({
    name:"slippers",
    price:1000
}))
//similarly we can do for arrays

//syntax 2 for fn declaration
const a=function(num){
    return num+2
}
console.log(a(5))


//in normal function declaration we can call function above its declaration but here since
//we are storing in a variable so we cant do so

//this  is user to refer current context for an object but not in a fun
const mnn ={ 
    username:"Aditya",
    life:"going good",
    welcome : function(){
        console.log(` Hii ${this.username}, welcome onboard`)
    }
}
mnn.welcome()
mnn.username="animesh"
mnn.welcome()

// another definition for functions
const chai = () => {
    let username = "Aditya"
    console.log(`${username} is the king`)
}
chai()

const addtwo=(n1,n2) => {
    return n1+n2
}
//implicit return
const addn = (n1,n2) => n1+n2//returns n1 + n2 without return keyword 
const addnn=(n1,n2)=>(n1+n2)//returns n1 + n2 without return keyword better if u use
//Using the parentheses ( ) here is completely valid, but for a simple math equation, it is optional. However,
//  using parentheses becomes mandatory in one specific scenario: Returning an Object.