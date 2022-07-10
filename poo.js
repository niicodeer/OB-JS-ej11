class Estudiante{
    nombre = "Nico";
    asignaturas = ["HTML", "CSS", "Javascript"];
    obtenDatos = function () {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas,
        }
    };
}

const estudiante = new Estudiante;

console.log(estudiante.obtenDatos());