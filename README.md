<h2> Hi, We are group 6! <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" width="60"></h2>

<p><em>FullStack Programmers at <a href="https://codigo.edu.pe/">CodiGO</a><img src="https://media.giphy.com/media/fYSnHlufseco8Fh93Z/giphy.gif" width="30">
</em></p>

###  A little more about me our codes funcionality  
 <h2> This is how we did it using JavaScript</h2>

###  Dark Mode main function  

```javascript
circleContainer.onclick=function(){
    document.documentElement.classList.toggle('darkTheme')
    circle.classList.toggle('circle-dark')
    figure.classList.toggle('figure-black')
    if(mode===0){
        text.textContent='GRUPO 18 Sala 6'
        username.textContent=localStorage.getItem('email')
        message.textContent='Lograste entrar'
        inputText.classList.toggle('text-dark')
        mode=1
    }
    else {
        text.textContent='GRUPO 18 Sala 6'
        message.textContent='Iniciaste sesion correctamente'
        username.textContent=localStorage.getItem('email')
        inputText.classList.toggle('text-dark')
        mode=0
    }
}
```
### Login session usig localStorage

```javascript
buttonSubmit.onclick=function async(e){
     e.preventDefault()
     inputs.forEach((element)=>{
        localStorage.setItem(element.name,element.value)
     })
     if(mode===0) username.textContent=localStorage.getItem('email')
     else username.textContent='Grupo 18'
     form.style.display='none'
     article.style.display='flex'
     let contadorNumero=4
     setInterval(()=>{
        conteoRegresivo.innerHTML=contadorNumero
        contadorNumero--
     },1000)
     
      setTimeout(()=>{
       
        window.location.href = 'index.html';
     },5000)   
}


```
### JS Challenges

<p><em>JS Files at <a href="https://github.com/BCIDevelop/MiniHackaton/tree/main/static/js">JS Links</a></em></p>

### First JS Challenge is it LeapYear

```javascript
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
```

### Second JS Challenge Calculator

```javascript
    
function calculadora(operacion,x,y){   
    let resultado=0
    const operando1=parseFloat(x)
    const operando2=parseFloat(y)
    if(!isNaN(operando1) ||!isNaN(operando2) ) return 'Por favor, revisa tus datos '
        switch (operacion) {
            case 'sumar':
                resultado=operando1 + operando2
                break;
            case 'restar':
                resultado=operando1 - operando2
                break;
            case 'multiplicacion':
                resultado=operando1 * operando2
                break;
            case 'division':
                if (operando2===0) resultado='No se deberia dividir entre 0'
                resultado=operando1 / operando2
                break;
            case 'exponenciacion':
                resultado=operando1 ^ operando2
                break;
            case 'residuo':
                resultado=operando1 % operando2
                break;
            default:
                resultado=-1
                break;
        }
        return resultado
}

```

### Third JS Challenge Calculate Total Ammount to pay

```javascript
    function requiredProducto(nombre,cantidad){
    let resultado=0
    const cantidadPedido=parseInt(cantidad)
    if(!isNaN(cantidadPedido)) return 'Por favor revisa tus datos'
        switch (nombre) {
            case 'refresco':
                resultado=cantidadPedido * 1
                break;
            case 'cerveza':
                resultado=cantidadPedido * 2.5
                break;
            case 'papitas':
                resultado=cantidadPedido * 5
                break;
         
            default:
                resultado=-1
                break;
        }

        return `El precio total seria ${resultado} soles`
}

```
<img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="60"> <em><b>Great Team Work! </b> so if you want to say <b>hi, We'll be happy here about you!</b> :)</em>

---

⭐️ From Group 6 G-18