let score=53;
let adi="53";
let a="43d"

console.log(typeof score);
console.log(typeof(score));

let nu=Number(adi)
console.log(typeof nu)//since 53 is a number so converted

let as=Number(a);
console.log(typeof as);//still output will be number but inside variable NaN (not a number)
console.log(as);//NaN
/* "33"=>33
    "abc"=>NaN
    true=>1 ; false =>0
    */
  
let x=1;
let bool=Boolean(x);
console.log(bool)
//1=> true;  0 => false
//"" => false
//"adi" => true
//similar conversion for String etc

//operations like 2+3 etc
let value=3
let negValue=-value
console.log(negValue)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2^4)//Xor operator
console.log(2>4)//shift operator
console.log(2**4)//power

let str1="Hello"
let str2="Aditya"
let str3=str1+str2//concatenation without spaces
console.log(str3)
console.log("2"+3)
console.log("2"+2+3)//since pehle 2 str hai so rest bhi str me ho jaigi
console.log(2+2+"3")//pehle int hai toh jaha tk possible hai tbb tk int and rest str
console.log(2+2+"3"+2)//pehle int hai toh jaha tk possible hai tbb tk int and rest str ke baad ke sab str
console.log(2+3*5%3)
//but try to avoid this type of things and use brackets although bodmas for programming is follwed 
let n1 , n2, n3;//multiple declaration
 n1=101;
 n2=101
 console.log(--n1)//first decrement then print   100
 console.log(n2--)//first print then decrement   101
 //== checks like "2"==2 =>true  as convers str 2 to num 
 //===cheks everything along with datatype so "2"===2  =>false
 n2=Symbol(23)
 n3=Symbol(23)
 console.log(n3==n2);//symbol gives uniqueness means although both are same but false will be o/p
 
