class Alumno {
    public nombre: string;
    public edad: number;
    public correo: string;
    public promedio: number;

    constructor(nombre: string, edad: number, correo: string, promedio: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.promedio = promedio;
    }
}

const alumnos: Array<Alumno> = [
    { nombre: "Jose Perez", edad: 22, correo: "jose@perez.com", promedio: 6 },
    { nombre: "Juan Perez", edad: 19, correo: "juan@perez.com", promedio: 7 },
    { nombre: "Maria Yepez", edad: 21, correo: "maria@yepez.com", promedio: 9 },
    { nombre: "Jose Uribe", edad: 23, correo: "jose@gmail.com", promedio: 5 },
    { nombre: "Juana Medina", edad: 18, correo: "juana@gmail.com", promedio: 7 },
    { nombre: "Maria Contreras", edad: 20, correo: "mariaC@gmail.com", promedio: 10 },
    { nombre: "Alan Brito", edad: 22, correo: "alan@brito.com", promedio: 5 },
    { nombre: "Angelica Galindo", edad: 19, correo: "angelica@galindo.com", promedio: 7 },
    { nombre: "Sara Castro", edad: 21, correo: "scastro@gmail.com", promedio: 6 },
    { nombre: "Carlos Marin", edad: 23, correo: "carlos@gmail.com", promedio: 8 },
    { nombre: "Karla Medina", edad: 18, correo: "Karla@gmail.com", promedio: 3 },
    { nombre: "Daniela Medina", edad: 20, correo: "danielamedinaC@gmail.com", promedio: 7 }
];

//Functions

const firstFunction = (arr: Array<Alumno>) => {
    arr.forEach((arra) => {
        if(arra.promedio > 6){console.log("Estudiante:", arra.nombre, "Promedio:", arra.promedio)};
    });
};

const secondFunction = (arr: Array<Alumno>) => {
    arr.forEach((arra) => {
        if(arra.promedio < 6 && arra.edad > 19){console.log("Estudiante:", arra.nombre, "Promedio:", arra.promedio)};
    });
};

const thirdFunction = (arr: Array<Alumno>) => {
    const order = arr.sort((a, b) => a.promedio < b.promedio ? -1 : 1);
    console.log(order);
};

const fourthFunction = (arr: Array<Alumno>) => {
    arr.forEach((arra) => {
        if(arra.promedio <= 4){
            arra.promedio += 2;
            console.log("Estudiante:", arra.nombre, "Promedio:", arra.promedio)};
    });
};
const fifthFunction = (arr: Array<Alumno>) => {
    let prom:number = 0;
    arr.forEach((arra) => {
        prom += arra.promedio;
    });
    console.log("Promedio estudiantes:",Math.round(prom/(arr.length+1)));
};

//Calls

firstFunction(alumnos);

//secondFunction(alumnos);

//thirdFunction(alumnos);

//fourthFunction(alumnos);

//fifthFunction(alumnos);