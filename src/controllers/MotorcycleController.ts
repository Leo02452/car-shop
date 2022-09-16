import { Request, Response } from 'express';
import MotorcycleService from '../services/MotorcycleService';

export default class MotorcycleController {
  constructor(private _motorcycleService: MotorcycleService) { }

  public async create(req: Request, res: Response) {
    const motorcycle = req.body;

    const createdMotorcycle = await this._motorcycleService.create(motorcycle);

    res.status(201).json(createdMotorcycle);
  }
}