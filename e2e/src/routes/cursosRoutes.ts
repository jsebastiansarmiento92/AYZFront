import { Router } from 'express';
import cursosController from '../controller/cursosController';

class CursosRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', cursosController.obtenerCursos);
    }
}

const cursosRoutes = new CursosRoutes();
export default cursosRoutes.router;