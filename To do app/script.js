let input = document.getElementById("element")
let button = document.getElementById("add")
function add(elem){
    let li=document.createElement("li")
    li.textContent=`${elem}`
    document.getElementById("list").appendChild(li)
    input.value=""
    let but=document.createElement("button")
    but.textContent="delete"
    but.addEventListener("click", function(){
        li.remove()
    })
    li.appendChild(but)
}
button.addEventListener("click", function(e){
    e.preventDefault()
    if(input.value==""){
        alert("enter the task")
    }
    else{
    add(input.value)}
})