import { AreasPractica } from "./areasPractica";
import { GrupoTrabajoModel } from "./gruposTrabajoModel";

export class GrupoAreasModel {
    
    public id : number;
    public id_areas_de_practica : AreasPractica = new AreasPractica(null,"","","","","");
    public id_grupo_de_trabajo : GrupoTrabajoModel = new GrupoTrabajoModel (null,"","","","","");
    
    constructor(id: number, idAreas: AreasPractica, idGrupo: GrupoTrabajoModel) {
        this.id = id;
        this.id_areas_de_practica = idAreas;
        this.id_grupo_de_trabajo = idGrupo;
    }
}