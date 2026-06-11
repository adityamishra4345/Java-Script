function Digiclock(){

let time=new Date()
let h=time.getHours()
let m=time.getMinutes()
let s=time.getSeconds()
let suffix="AM"

if(h>12){
    suffix="PM"
}
h=h%12
h=h ? h:12
h=String(h).padStart(2,0)//need two element if less than pad staring with 0s
m=String(m).padStart(2,0)
s=String(s).padStart(2,0)
 document.getElementById('clock').textContent=`${h}:${m}:${s} ${suffix}`

}
Digiclock()
setInterval(Digiclock,1000)