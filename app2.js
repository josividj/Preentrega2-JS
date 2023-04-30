alert('Bienvenido al juego de la caja mágica!!!');

let numero;

let sumaPar = 0;
let sumaImpar = 0;
let sumaPrimos = 0;

const messagePar = 'El número ingresado es PAR!';
const messageImpar = 'El número ingresado es IMPAR!';
const messagePrimos = 'además es un número PRIMO!!!';



do {
    numero = Number(prompt('Por favor ingrese un número entre 2 y 100'));

    if (numero >= 2 && numero <= 100) {
        alert('Ud. ha ingresado el número: ' + numero);

    } else {

        alert('Caracter invalido');
        numero = Number(prompt('Por favor ingrese un número entre 2 y 100'));
    }


    function numeroPar(numero) {
        if (numero % 2 === 0) {
            sumaPar++;
            return messagePar;
        }
    }

    if (numeroPar(numero)) {
        alert(messagePar);
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
            alert(numero + ' no es un número primo');
        }
    }

    numeroPar(numero);
    numeroPrimo(numero);
} while ((numero) && (numero >= 2 && numero <= 100));




// function numeroPrimo(numero) {
//     let esPrimo = false;

//     if (numero === 2 || numero === 3 || numero === 5 || numero === 7 || numero === 11) {
//         if (numero % 3 !== 0 && numero % 5 !== 0 && numero % 7 !== 0 && numero % 11 !== 0) {
//             esPrimo = true;
//         }
//     }

//     if (esPrimo) {
//         sumaPrimos++;
//         return numero + ' ' + messagePrimos;
//     } else {
//         return numero + ' no es un número primo';
//     }
// }

/*En este código, agregamos una nueva variable esPrimo que se inicializa en false. Si el número cumple las condiciones del primer bloque "if" y también las del segundo bloque "if", entonces establecemos esPrimo en true.

Luego, fuera de los bloques "if", comprobamos si esPrimo es verdadero. Si es así, incrementamos sumaPrimos y devolvemos el número concatenado con el mensaje messagePrimos. Si esPrimo es falso, simplemente devolvemos un mensaje que indica que el número no es primo.

De esta manera, el código informa si el número es primo y también devuelve un mensaje específico cuando es primo, todo esto mientras maneja adecuadamente la condición de número no definido o ingresado por error.

*/