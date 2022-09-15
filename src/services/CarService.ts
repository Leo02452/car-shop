import { ErrorTypes } from '../errors/catalog';
import { carZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

export default class CarService {
  constructor(private _car: IModel<ICar>) { }

  public async create(object: unknown): Promise<ICar> {
    const parsed = carZodSchema.safeParse(object);

    if (!parsed.success) {
      throw parsed.error;
    }

    const created = await this._car.create(parsed.data);
    return created;
  }

  public async list(): Promise<ICar[]> {
    const cars = await this._car.read();
    return cars;
  }

  public async getById(id: string): Promise<ICar> {
    const car = await this._car.readOne(id);

    if (!car) {
      throw new Error(ErrorTypes.EntityNotFound);
    }

    return car;
  }

  public async update(id: string, object: unknown): Promise<ICar> {
    const parsed = carZodSchema.safeParse(object);

    if (!parsed.success) {
      throw parsed.error;
    }

    const updated = await this._car.update(id, parsed.data);

    if (!updated) {
      throw new Error(ErrorTypes.EntityNotFound);
    }

    return updated;
  }

  public async delete(id: string): Promise<void> {
    const car = await this._car.delete(id);

    if (!car) {
      throw new Error(ErrorTypes.EntityNotFound);
    }
  }
}