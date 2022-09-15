import { Router } from 'express';
import { carController } from '../factories/CarControllerFactory';

const route = Router();

route.post('/', (req, res) => carController.create(req, res));

export default route;