import { Request, Response } from 'express';

class IndexController {
  public index(req: Request, res: Response): void {
    res.json({ 'Mensaje': 'La API para equipos esta en /api/public/cursos' });
  }
}
const indexController = new IndexController();
export default indexController;