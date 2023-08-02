export class Skill {
    id?: number;
    nombre: string;
    img: string;

    constructor(nombre:string = "", img: string = ""){
        this.nombre = nombre;
        this.img = img;
    }
   
}