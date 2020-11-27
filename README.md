
![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)

<span>Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/programming?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

## Título

Examen: Condiciones

## Propósito

Evaluar el uso de condicionales utilizando javascript

## Requerimientos funcionales

1. (3 Puntos) Escribir una función que reciba como parámetros el saldo de una cuenta y la cantidad que un cliente quiere retirar. Si la cantidad que el cliente quiere retirar es mayor que  que el saldo, la función regresará -1. Pero, si la cuenta tiene saldo suficiente, entonces la función regresará el nuevo saldo, es decir descontará la cantidad que retiró. Por ejemplo, si saldo=100 y retiro=200, la función regresará -1, pues no hay fondos suficientes. Pero, si saldo=100 y retiro=25, entonces la función regresará 75, el resultado de restar 25 a 100.
     - `retirar(saldo, retiro);`
  
2. (3 Puntos) Escribir una función que reciba como parámetros el costo de un producto y el número de productos comprados y regrese el total de la venta. La función calculará la venta total de acuerdo los siguientes criterios:
   -  Si el cliente compra menos de 10 productos se le hará un 5% de descuento.
   -  Si compra entre 10 y 20 productos se le hará un 10% de descuento
   -  Si compra más de 20 productos tendrá un 15% de descuento.
     - `totalVenta(costoProducto, numeroProductos);`

3. (4 Puntos) Escribir una función que permita calcular el costo total de una venta de boletos para una sala de cine. La función recibirá como parámetros, el número de asiento  y el día de la semana. Para los días de la semana se utilizará 1 para el Lunes, 2 Martes, 3 Miércoles, 4 Jueves, 5 Viernes, 6 Sábado y 7 Domingo. El costo de los boletos es el siguiente:
   - Asientos del 1 al 10 tienen un costo de: $ 50.00
   - Asientos del 11 al 20 tienen un costo de: $60.00
   - Asientos del 21 al 30 tienen un costo de: $70.00
   - Todos los demás asientos tienen un costo de: $80.00

   Los días lunes y miércoles se aplica un descuento del 10%. Si se ingresa un número de día de la semana no válido, la función regresará -1
   - `costoBoletos(numeroAsiento, dia);`

## Requerimientos no funcionales

- Las funciones deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola
- El examen es individual

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método o función.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
