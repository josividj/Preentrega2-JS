///CAJA MÁGICA DE NUMEROS
///se le pregunta al usuario si quiere jugar
///si sí, se le pide ingrese un número menor que 100

///la caja detecta si el número es par, impar y si además es primo
///al final de cada usuario ingresado se le presentan los resultados parciales
///lo que permite cambiar de usuario sin salir


const salir = 'n';

let numero;
let opcion;
let nombre;
let identidad = '';
let sumaPar = 0;
let sumaImpar = 0;
let sumaPrimos = 0;

const messagePar = 'El número ingresado es PAR!';
const messageImpar = 'El número ingresado es IMPAR!';
const messagePrimos = 'además es un número PRIMO!!!';

alert('Bienvenido al juego de la caja mágica!!!');

nombre = prompt('Por favor ingrese su nombre');

do {
        numero = Number(prompt('Ingrese un número entre 2 y 100'));
        while (numero < 2 || numero > 100) {
            numero = Number(prompt('Ha ingresado un número inválido, ingrese nuevamente'));
        }
        alert(nombre + ' Ud. ha ingresado el número : ' + numero);

            function numeroPar(numero) {
                if (numero % 2 === 0) {
                    return messagePar;
                }
            }

            if (numeroPar(numero)) {
                alert(messagePar);
                sumaPar++;
            } else {
                alert(messageImpar);
                sumaImpar++;
            }

            function numeroPrimo(numero) {
                let esPrimo = false;
                if (numero === 2 || numero === 3 || numero === 5 || numero === 7 || numero === 11) {
                    esPrimo = true;
                } else {
                    if (numero % 2 != 0 && numero % 3 !== 0 && numero % 5 !== 0 && numero % 7 !== 0 && numero % 11 !== 0) {
                        esPrimo = true;
                    }
                }
                if (esPrimo) {
                    sumaPrimos++;
                    alert(numero + ' ' + messagePrimos);
                } else {
                    alert(numero + ' NO es un número primo');
                }
            }

            numeroPar(numero);
            numeroPrimo(numero);

            alert(nombre + ' Hasta este momento Ud. ha obtenido: ' + '\n' + sumaPar + ' número/s par/es; ' + '\n' + sumaImpar + ' número/s impar/es; y ' + '\n' + sumaPrimos + ' número/s primos!!!');

    opcion = (prompt('Desea seguir probando? s/n').toLowerCase());
    if (opcion == salir) {
        alert('Gracias y hasta pronto!');
    }
} while (opcion != salir);