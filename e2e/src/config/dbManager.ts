import { Response } from 'express';
import pool from './conn';

class DbManager {
  public static async executeQuery(sql: string, type: string, parameters: any, res: Response): Promise<any> {
    pool.query(sql, parameters, function(error, result) {
      if (error) {
        res.status(400).json({ 'Mensaje': error });
        return false;
      }
      switch (type.toLowerCase()) {
        case 'select':
          res.status(200).json(result);
          break;
        default:
          res.status(400).json({ 'Mensaje': 'Servicio no disponible.' });
          break;

      }

    });
  }
}
export default DbManager;