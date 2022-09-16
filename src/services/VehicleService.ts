import { ZodSchema } from 'zod';
import { ErrorTypes } from '../errors/catalog';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

export default abstract class VehicleService<T> implements IService<T> {
  constructor(
    private _vehicle: IModel<T>,
    private _zodSchema: ZodSchema<T>,
  ) { }

  public async create(object: unknown): Promise<T> {
    const parsed = this._zodSchema.safeParse(object);

    if (!parsed.success) throw parsed.error;

    const vehicle = parsed.data as T;

    const created = await this._vehicle.create(vehicle);
    return created;
  }

  public async list(): Promise<T[]> {
    const vehicles = await this._vehicle.read();
    return vehicles;
  }

  public async getById(id: string): Promise<T> {
    const vehicle = await this._vehicle.readOne(id);

    if (!vehicle) throw new Error(ErrorTypes.EntityNotFound);

    return vehicle;
  }

  public async update(id: string, object: unknown): Promise<T> {
    const parsed = this._zodSchema.safeParse(object);

    if (!parsed.success) throw parsed.error;

    const vehicle = parsed.data as T;

    const updated = await this._vehicle.update(id, vehicle);

    if (!updated) throw new Error(ErrorTypes.EntityNotFound);

    return updated;
  }

  public async delete(id: string): Promise<void> {
    const vehicles = await this._vehicle.delete(id);

    if (!vehicles) throw new Error(ErrorTypes.EntityNotFound);
  }
}
