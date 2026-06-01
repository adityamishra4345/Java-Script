//IIFE (Immediately Invoked Function Expression)
(function adi() {
    console.log("(Immediately Invoked Function Expression)")
})();// thid () is calling to any parameter can be given into it
//using this function will instantly called when made  
//used beacause sometime problem arises due to pollution from global scope variables
(function adit(name) {
    console.log(`(Immediately Invoked Function Expression) by ${name}`)
})("Aditya");//for one iife it will be executed but for multiple iife in one file semicolon 
//is needed to mark the ending of one iife 
