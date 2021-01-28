export class AreasPractica {
    
    public id_areas_de_practica: number;
    public nombre: string;
    public objetivo: string;
    public definicion: string;
    public imagen: string;

    constructor(id:number, nom: string, obj:string, def:string, img: string){
        this.id_areas_de_practica=id;
        this.nombre=nom;
        this.objetivo=obj;
        this.definicion=def;
        this.imagen =img;
    }

}