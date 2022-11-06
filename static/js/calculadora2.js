
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
