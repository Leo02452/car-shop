import { Request, Response } from 'express';
import MotorcycleService from '../services/MotorcycleService';

export default class MotorcycleController {
  constructor(private _motorcycleService: MotorcycleService) { }

  public async create(req: Request, res: Response) {
    const motorcycle = req.body;

    const createdMotorcycle = await this._motorcycleService.create(motorcycle);

    res.status(201).json(createdMotorcycle);
  }

  public async list(req: Request, res: Response) {
    const motorcycles = await this._motorcycleService.list();

    res.status(200).json(motorcycles);
  }

  public async getById(req: Request, res: Response) {
    const motorcycle = await this._motorcycleService.getById(req.params.id);

    res.status(200).json(motorcycle);
  }

  public async update(req: Request, res: Response) {
    const updatedMotorcycle = await this._motorcycleService.update(req.params.id, req.body);

    res.status(200).json(updatedMotorcycle);
  }

  public async delete(req: Request, res: Response) {
    await this._motorcycleService.delete(req.params.id);

    res.sendStatus(204);
  }
}