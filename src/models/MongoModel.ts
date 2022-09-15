import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T):Promise<T & { _id: string }> {
    const created = await this._model.create({ ...obj });

    return created as T & { _id: string };
  }

  public async read():Promise<T[]> {
    return this._model.find();
  }

  public async readOne(_id:string):Promise<T | null> {
    return this._model.findOne({ _id });
  }

  public async update(_id: string, object: T): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('Not valid id');
    
    const updated = await this._model.findByIdAndUpdate(
      { _id },
      { ...object } as UpdateQuery<T>,
      { new: true },
    );

    return updated;
  }

  public async delete(_id: string): Promise<T | null> {
    const toDestroy = this._model.findOne({ _id });
    await this._model.deleteOne({ _id });
    return toDestroy;
  }
}

export default MongoModel;