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
}