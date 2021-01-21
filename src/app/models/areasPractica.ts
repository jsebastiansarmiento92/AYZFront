

export class AreasPractica {
    id_areas_de_practica: number;
    nombre: string;
    objetivo: string;
    definicion: string;
    imagen: string;

    constructor(id:number, nom: string, obj:string, def:string, img: string){
        this.id_areas_de_practica=id;
        this.nombre=nom;
        this.objetivo=obj;
        this.definicion=def;
        this.imagen =img;
    }

}