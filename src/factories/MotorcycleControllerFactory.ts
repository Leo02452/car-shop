import MotorcycleController from '../controllers/MotorcycleController';
import Motorcycle from '../models/Motorcycle';
import MotorcycleService from '../services/MotorcycleService';

export default class MotorcycleControllerFactory {
  static make() {
    const model = new Motorcycle();
    const service = new MotorcycleService(model);
    const controller = new MotorcycleController(service);

    return controller;
  }
}

export const motorcycleController = MotorcycleControllerFactory.make();