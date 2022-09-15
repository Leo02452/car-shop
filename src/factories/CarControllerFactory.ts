import CarController from '../controllers/CarController';
import Car from '../models/Car';
import CarService from '../services/CarService';

export default class CarControllerFactory {
  static make() {
    const model = new Car();
    const service = new CarService(model);
    const controller = new CarController(service);

    return controller;
  }
}

export const carController = CarControllerFactory.make();