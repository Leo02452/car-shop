import { Request, Response } from 'express';
import CarService from '../services/CarService';

export default class CarController {
  constructor(private _carService: CarService) { }

  public async create(req: Request, res: Response) {
    const car = req.body;

    const createdCar = await this._carService.create(car);

    res.status(201).json(createdCar);
  }

  public async list(req: Request, res: Response) {
    const cars = await this._carService.list();

    res.status(200).json(cars);
  }

  public async getById(req: Request, res: Response) {
    const car = await this._carService.getById(req.params.id);

    res.status(200).json(car);
  }

  public async update(req: Request, res: Response) {
    const updatedCar = await this._carService.update(req.params.id, req.body);

    res.status(200).json(updatedCar);
  }

  public async delete(req: Request, res: Response) {
    await this._carService.delete(req.params.id);

    res.sendStatus(204);
  }
}