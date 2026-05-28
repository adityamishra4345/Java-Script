let arr=[1,2,3,4,5]
console.log((arr.join()).length)//.join transforms array to string and commas are also 
//considered to be a char
let arr1=arr.slice(1,3)//slices 1 and 2nd index no impact on original array
let arr2=arr.splice(1,3)//slices 1 ,2 , 3rd index and these values gets removed from the array
//i.e original array got changed
let hero1=["adi",'ani','adarsh','arihant','Rishi']
let hero2=['Rishi','ayushman','hardik','priyansh']
let final_heros=hero1.concat(hero2)//merges two array and give a new array
console.log(final_heros)
//Method 2
let f2=[...hero1,...hero2]//concatnate multiple operators at once
console.log(f2)

//if we have array inside array and so on then use arr.flat(depth)
//where depth is kitne andr tk array ghussa hai we can give it infinity 
//then we will get a new array with all elements 
console.log(Array.from("Aditya"))//returns array with all elemnts

let a=12
let b='adi'
let c= true
let d=Array.of(a,b,c)//makes array from multiple variables
console.log(d)