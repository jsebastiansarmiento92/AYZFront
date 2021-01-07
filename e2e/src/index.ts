import cors from 'cors';
import morgan from 'morgan';
import express, { Application } from 'express';

import indexRoutes from './routes/indexRoutes';
import cursosRoutes from './routes/cursosRoutes';

class Servidor {

    app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('PORT', process.env.PORT || 3000);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(): void{
        this.app.use('/', indexRoutes);        
        this.app.use('/api/public/cursos', cursosRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('PORT'), () => {
            console.log('Servicio activo en el puerto ' + this.app.get('PORT'));
        });
    }
}

const server =  new Servidor();
server.start();