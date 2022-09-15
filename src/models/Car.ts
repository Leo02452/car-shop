import { model as mongooseCreateModel, Schema } from 'mongoose';
import MongoModel from './MongoModel';
import { ICar } from '../interfaces/ICar';

const carMongooseSchema = new Schema<ICar>({
  status: Boolean,
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

export default class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carMongooseSchema)) {
    super(model);
  }
}