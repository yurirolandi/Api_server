import Router from 'express';
import homeController from './controllers/HomeController';
import GrausController from './controllers/GrausController';
import FotoController from './controllers/FotoController';
import userAutentication from './middlewares/userAutentication';



const routes = new Router();

routes.get('/', homeController.index);
routes.post('/api/registerUser/', homeController.createUser);
routes.post('/api/autenticate/', homeController.autencicate);

routes.get('/api/graus', GrausController.index)
routes.post('/api/registergraus/', GrausController.create)

routes.post('/api/foto/', userAutentication, FotoController.store)

export default routes;
