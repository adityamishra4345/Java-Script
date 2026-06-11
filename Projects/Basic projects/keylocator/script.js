document.body.addEventListener('keydown',function(e){
    if(e.key==" "){
        document.getElementById('key').textContent="Space Bar"
    }
    else{
    document.getElementById('key').textContent=e.key
    }

})