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
