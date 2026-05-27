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
