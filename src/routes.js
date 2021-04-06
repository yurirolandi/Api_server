import Router from 'express';
import homeController from './controllers/HomeController';
import GrausController from './controllers/GrausController';
import FotoController from './controllers/FotoController';




const routes = new Router();

routes.get('/', homeController.index);
routes.post('/registerUser/', homeController.createUser);
routes.post('/autenticate/', homeController.autencicate);

routes.get('/graus', GrausController.index)
routes.post('/registergraus/', GrausController.create)

routes.post('/foto/', FotoController.store)

export default routes;
