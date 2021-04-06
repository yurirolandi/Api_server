import Router from 'express';
import multer from 'multer';
import homeController from './controllers/HomeController';
import GrausController from './controllers/GrausController';
import FotoController from './controllers/FotoController';
import multerConfig from './config/multerConfig';

const upload = multer(multerConfig);

const routes = new Router();

routes.get('/', homeController.index);
routes.post('/registerUser/', homeController.createUser);
routes.post('/autenticate/', homeController.autencicate);

routes.get('/graus', GrausController.index)
routes.post('/registergraus/', GrausController.create)

routes.post('/foto/', upload.single('foto'), FotoController.store)

export default routes;
