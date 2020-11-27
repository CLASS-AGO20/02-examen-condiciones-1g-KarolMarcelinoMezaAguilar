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

    // Función que calcule el costo de una venta de boletos

    costoBoletos(numeroAsiento, dia){

        let costoAsiento;

        if(numeroAsiento >= 1 && numeroAsiento <= 10){
            costoAsiento = 50;
        }else if(numeroAsiento >= 11 && numeroAsiento <= 20){
            costoAsiento = 60;
        }else if(numeroAsiento >= 21 && numeroAsiento <= 30){
            costoAsiento = 70;
        }else{
            costoAsiento = 80;
        }

        if(dia == 1){
            costoAsiento = costoAsiento * 0.9;
        }else if(dia == 3){
            costoAsiento = costoAsiento * 0.9;
        }else if(dia >= 8){
            return -1;
        }else if(dia <= 0){
            return -1;
        }else{
            return costoAsiento;
        }

        return costoAsiento;

    }

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

//Función 3
console.log(app.costoBoletos(5, 2));
console.log(app.costoBoletos(15, 2));
console.log(app.costoBoletos(25, 2));
console.log(app.costoBoletos(35, 2));
console.log(app.costoBoletos(5, 1));
console.log(app.costoBoletos(5, 3));
console.log(app.costoBoletos(5, 0));
console.log(app.costoBoletos(5, 12));