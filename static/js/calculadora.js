btnComprobar=document.getElementById('btn-comprobar')
input=document.getElementById('input')
result = document.getElementById('display')

function isLeapYear(value){
   
    if(value/4 &&(value%100!==0 || value%400===0) ) return true 
    return false
}

btnComprobar.onsubmit=function(e){
    e.preventDefualt()

    if(isLeapYear(input.value)) result.innerHTML='Si es año bisiesto' 
    else result.innerHTML='No es año bisiesto' 
}