let adi="hello";
let aditya="aditya-is-king"
let ad = new String("  hello  ")//Another method to declare string
console.log(adi[0])
console.log(adi.length)
console.log(adi.toUpperCase())//original value will not be changed
console.log(adi.charAt(1))
console.log(adi.indexOf('l'))
console.log(adi.substring(1,3))//3 will not included
console.log(adi.slice(-5,3))//0th index is also -n where n is size 
console.log(ad.trim())//removes white spaces
console.log(ad.trimStart())
console.log(ad.trimEnd())
console.log(adi.replace('el','oo'))
console.log(aditya.split('-'))
