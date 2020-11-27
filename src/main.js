export default class App {

    // Función que retire dinero de una cuenta
    retirar(saldo, retiro){

        let restante = saldo - retiro

        if(retiro > saldo){
            restante = -1;
        }else{
            return restante;
        }

        return restante;

    }

    // Función que calcule el descuento de una venta

    totalVenta(costoProducto, numeroProductos){

        let total = costoProducto * numeroProductos;
        let descuento

        if(numeroProductos < 10){
            descuento = total * 0.95;
        }else if(numeroProductos >= 10 && numeroProductos <= 20){
            descuento = total * 0.9;
        }else if(numeroProductos > 20){
            descuento = total * 0.85;
        }

        return descuento;

    }

    // Función que

}

let app = new App();

// Función 1
console.log(app.retirar(100, 80));
console.log(app.retirar(110, 200));
console.log(app.retirar(90, 90));

// Función 2
console.log(app.totalVenta(10, 5));
console.log(app.totalVenta(10, 10));
console.log(app.totalVenta(10, 20));
console.log(app.totalVenta(10, 30));