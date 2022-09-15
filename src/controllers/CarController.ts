import { Request, Response } from 'express';
import CarService from '../services/CarService';

export default class CarController {
  constructor(private _carService: CarService) { }

  public async create(req: Request, res: Response) {
    const car = req.body;

    const createdCar = await this._carService.create(car);

    res.status(201).json(createdCar);
  }
}