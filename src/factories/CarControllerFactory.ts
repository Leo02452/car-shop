import CarController from '../controllers/CarController';
import CarModel from '../models/CarModel';
import CarService from '../services/CarService';

export default class CarControllerFactory {
  static make() {
    const model = new CarModel();
    const service = new CarService(model);
    const controller = new CarController(service);

    return controller;
  }
}

export const carController = CarControllerFactory.make();