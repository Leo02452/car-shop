import { carZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import VehicleService from './VehicleService';

export default class CarService extends VehicleService<ICar> {
  constructor(private _model: IModel<ICar>, _zodSchema = carZodSchema) {
    super(_model, _zodSchema);
  }
}