import MotorcycleController from '../controllers/MotorcycleController';
import MotorcycleModel from '../models/MotorcycleModel';
import MotorcycleService from '../services/MotorcycleService';

export default class MotorcycleControllerFactory {
  static make() {
    const model = new MotorcycleModel();
    const service = new MotorcycleService(model);
    const controller = new MotorcycleController(service);

    return controller;
  }
}

export const motorcycleController = MotorcycleControllerFactory.make();