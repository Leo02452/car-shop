import { Router } from 'express';
import { motorcycleController } from '../factories/MotorcycleControllerFactory';

const route = Router();

route.post('/', (req, res) => motorcycleController.create(req, res));
route.get('/:id', (req, res) => motorcycleController.getById(req, res));
route.get('/', (req, res) => motorcycleController.list(req, res));
route.put('/:id', (req, res) => motorcycleController.update(req, res));
route.delete('/:id', (req, res) => motorcycleController.delete(req, res));

export default route;