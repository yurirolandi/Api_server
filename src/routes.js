import Router from 'express';
import homeController from './controllers/HomeController';

const routes = new Router();

routes.get('/', homeController.index);
routes.post('/registerUser', homeController.createUser);

export default routes;
