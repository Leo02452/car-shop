import { Router } from 'express';
import { motorcycleController } from '../factories/MotorcycleControllerFactory';

const route = Router();

route.post('/', (req, res) => motorcycleController.create(req, res));

export default route;