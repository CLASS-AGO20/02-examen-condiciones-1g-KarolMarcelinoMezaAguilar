export default class App {

    // Función que
    retirar(saldo, retiro){

        let restante = saldo - retiro

        if(retiro > saldo){
            restante = -1;
        }else{
            return restante
        }

        return restante;

    }

    // Función que


    // Función que

}

let app = new App();

// Función 1
console.log(app.retirar(100, 80));
console.log(app.retirar(110, 200));
console.log(app.retirar(90, 90));