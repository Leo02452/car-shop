import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import VehicleModel from './VehicleModel';

const motorcycleMongooseSchema = new Schema<IMotorcycle>({
  status: Boolean,
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, { versionKey: false });

export default class MotorcycleModel extends VehicleModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('MotorcycleModel', motorcycleMongooseSchema)) {
    super(model);
  }
}