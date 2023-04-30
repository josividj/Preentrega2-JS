//hacer una clase con alumnos participantes que ingrese el usuario
class Participante {
    nombre;
    edad;
    colegio;
    numeroElegido;

    constructor(nombre, numeroElegido) {
        this.nombre = nombre;
        // this.edad = edad;
        // this.colegio = colegio;
        this.numeroElegido = numeroElegido;
    }

    elegirNumero() {
        numeroElegido = Math.round(math.random() * 999 + 1)
        return numeroElegido;
    }

    cargarDatos() {
        let alumno = {};
        const nuevoNombre = prompt('Ingrese un nombre');
        alumno.push(nuevoNombre);
        alumno.push(numeroElegido);

    }

    cargarAlumno() {
        let seguir;
        do {
            cargarDatos();
            elegirNumero();
            seguir = prompt('Desea continuar? s/n')
        } while (seguir.toLowerCase == 's')
    }
}