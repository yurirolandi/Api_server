import Router from 'express';
import homeController from './controllers/HomeController';

const routes = new Router();

routes.get('/', homeController.index);
routes.post('/registerUser', homeController.createUser);
routes.post('/autenticate', homeController.autencicate);

export default routes;
