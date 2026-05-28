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