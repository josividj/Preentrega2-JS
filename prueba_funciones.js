/// probar la función esPar 
let numero;
numero = Number(prompt('Ingrese numero'));
function esPar(numero) {
    return numero % 2 === 0;

}

if (esPar(numero)) {
    alert(`el número ${numero} es Par!!!`);
}

///pruebo la función esPrimo
function esPrimo(numero) {
for (let i= 2; i<numero; i++){
    if (numero % i === 0){
        return false;
    } {

    }
}
return numero !==1;
}

if (esPrimo(numero)) {
    alert(`el número ${numero} es Primo!!!`);
}else{
    alert(`el número ${numero} NO es Primo!!!`);
}



function cajaMagica(numero) {;
    const resultado = {};
    resultado.par = esPar(numero);
    resultado.impar = !esPar(numero);
    resultado.primo = esPrimo(numero);
    return resultado;
    
}

let resultado = cajaMagica(numero);  
console.log(resultado);

// function cargarDatos() {
//     let alumno = {};
//     const nuevoNombre = prompt('Ingrese un nombre');
//     alumno.push(nuevoNombre);
//     alumno.push(numeroElegido);

// }

//     function cargarAlumno() {
// let seguir;
// do{
//     cargarDatos();
//     elegirNumero();
//     seguir = prompt('Desea continuar? s/n')
// }while (seguir.toLowerCase == 's')
//     }



// let alumno = {};
// const alumno1 = new Participante(`${nuevoNombre}, ${numeroElegido}`);
// const alumno2 = new Participante(`${nuevoNombre}, ${numeroElegido}`);
// const concursantes = [{alumno1},{alumno2}];

// console.log (concursantes);
// console.log(alumnos);

const arrayAlumnos = new Participante().cargarAlumno(); // Creamos una nueva instancia de Participante y llamamos al método cargarAlumno()
console.log(arrayAlumnos); // Imprimimos el array de alumnos resultante
console.log(arrayAlumnos.length);

