import { Request, Response } from 'express';
import dbManager from '../config/dbManager';

class CursosController extends dbManager {
  public obtenerCursos(req: Request, res: Response): Promise<any> {
    const cadena = 'select * from cursos order by codcurso';
    return CursosController.executeQuery(cadena, 'select', req, res);
  }

  
  public cursoSleccionado(){
    const cadena = 'select * from cursos';

  }

}
const cursosController = new CursosController();
export default cursosController;