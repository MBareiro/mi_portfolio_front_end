export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;   

    constructor(id: number = 0, nombre:  string = "", apellido:  string = "", descripcion:  string = "", img:  string = "") {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
    }
}
