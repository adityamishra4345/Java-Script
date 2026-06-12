
document.getElementById("calculate").addEventListener('click',function(e){
    e.preventDefault()
    let h=document.getElementById('height').value
    h=h/100
    let w=document.getElementById('weight').value
    let bmi=(w/(h*h)).toFixed(2)
    document.getElementById('output').textContent=`BMI : ${bmi}`

})