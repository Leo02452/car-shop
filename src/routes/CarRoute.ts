import { Router } from 'express';
import { carController } from '../factories/CarControllerFactory';

const route = Router();

route.post('/', (req, res) => carController.create(req, res));
route.get('/', (req, res) => carController.list(req, res));
route.get('/:id', (req, res) => carController.getById(req, res));

export default route;