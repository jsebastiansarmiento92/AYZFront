import { AreasPractica } from "./areasPractica";

export class GrupoTrabajoModel {
    public id_grupo_de_trabajo: number;
    public nombre_area: string;
    public especialidad: string;
    public perfil_profesional: string;
    public descripcion: string;
    public imagen: string;
    
    constructor(id: number, nom: string, esp: string, per: string, des: string, img: string) {
        
        this.id_grupo_de_trabajo = id;
        this.nombre_area = nom;
        this.especialidad = esp;
        this.perfil_profesional = per;
        this.descripcion = des;
        this.imagen = img;

    }
}