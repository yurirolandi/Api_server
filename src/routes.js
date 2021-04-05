import Router from 'express';
import homeController from './controllers/HomeController';
import GrausController from './controllers/GrausController';

const routes = new Router();

routes.get('/', homeController.index);
routes.post('/registerUser', homeController.createUser);
routes.post('/autenticate', homeController.autencicate);

routes.get('/graus', GrausController.index)
routes.post('/registergraus', GrausController.create)

export default routes;
