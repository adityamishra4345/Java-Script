//singleton obj  ==>  object.create    used as constructor method
const adi={}
adi.id="Asas"
adi.age=18
adi.schools="very"
console.log(adi)
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign({},obj1,obj2)//if same key then baad wala will be accepted
console.log(obj3)
const obj4={...obj1,...obj2}//mostly used instead of assign
console.log(obj4)
console.log(Object.keys(adi))//returns array of keys of given obj
console.log(Object.entries(adi))//returns array of keys value pairs of given obj






//object literal
const jsuser={
    name : "Aditya",
    age : 18,
    email: "adi@gmail.com",
    islog: false
}
console.log(jsuser.age)
console.log(jsuser["age"])//better method
console.log(jsuser["name"])
jsuser.email="animesh@.com"//changing the value
jsuser.greeting=function(){
    console.log("hello bug")
}
jsuser.greeting2=function(){
    console.log(`hello bug ,${jsuser['name']} how are u`)//`special method to print as inside we can use multiple variable`
    console.log(`hello bug ,${this.age} old u r`)//this is used to point jsuser as fn belongs to that
}
jsuser.greeting2()//function can be called similarly

Object.freeze(jsuser)//freezes the change i.e will not give error but also not let u to update
