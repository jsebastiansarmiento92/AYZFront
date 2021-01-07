import { Request, Response } from 'express';
import dbManager from '../config/dbManager';


class AreaspracticasController extends dbManager {
    public obtenerCursos(req: Request, res: Response): Promise<any> {
        const cadena = 'select * from cursos order by codcurso';
        return AreaspracticasController.executeQuery(cadena, 'select', req, res);
    }


    public cursoSleccionado() {
        const cadena = 'select * from cursos';

    }

}
const AreaspracticasController = new AreaspracticasController();
export default AreaspracticasController;
