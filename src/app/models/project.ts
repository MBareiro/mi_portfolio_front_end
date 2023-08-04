export class Project {
    id?: number;
    titulo: string;
    descripcion: string;
    img: string;  
    link: string; 

    constructor(titulo: string = "", descripcion: string = "", img: string = "", link: string = ""){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.img = img;
        this.link = link;
    }
}
