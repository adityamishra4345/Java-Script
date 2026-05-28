
const accountid=14453

let accemail="testemail.com"//used to define variables

let accountstate;

var pass="12345"//older method but have flows as follows the scope like function but do not obey 
//scope limit for "if and else" like let if defined inside if it will end as curly braces end but
//var leaks so we dont use var at all


accountcity="Deoria";// this is kind of global declaration js thinks that since no keywords so make it global

//accountid=12234  -> not allowed as accid is constt

console.log(accountid)//to print 

accemail="Aagmail.com"
 
console.table([accemail,accountid,accountstate,accountcity]);//prints in tabular form
