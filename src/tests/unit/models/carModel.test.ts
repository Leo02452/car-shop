import * as sinon from 'sinon';
import { expect } from 'chai';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import {
  carBody,
  cardToUpdate,
  carId,
  createdCar,
  deletedCar
} from '../../mocks/carMocks';

describe('Car Model', () => {
  const carModel = new CarModel();

  after(sinon.restore);

  describe('create', () => {
    it('should return a created car if bd returns a created car', async () => {
      sinon
        .stub(Model, 'create')
        .resolves(createdCar);
      
      const result = await carModel.create(carBody);
      expect(result).to.be.deep.equal(createdCar);
    });
  });

  describe('read', () => {
    it('should return a list of cars if bd returns a list of cars', async () => {
      sinon
        .stub(Model, 'find')
        .resolves([createdCar]);
      
      const result = await carModel.read();
      expect(result).to.be.deep.equal([createdCar]);
    });
  });

  describe('list one', () => {
    it('should return a car if bd returns a car', async () => {
      sinon
        .stub(Model, 'findOne')
        .resolves(createdCar);
      
      const result = await carModel.readOne(carId._id);
      expect(result).to.be.deep.equal(createdCar);
    });
  });

  describe('update', () => {
    it('should return an updated car if bd returns an updated car', async () => {
      sinon
        .stub(Model, 'findByIdAndUpdate')
        .resolves({ ...carId, ...cardToUpdate });
      
      const result = await carModel.update(carId._id, cardToUpdate);
      expect(result).to.be.deep.equal({ ...carId, ...cardToUpdate });
    });
  });

  describe('delete', () => {
    it('should return a deleted car if bd return a deleted car', async () => {
      sinon
        .stub(Model, 'findByIdAndDelete')
        .resolves(deletedCar);
      
      const result = await carModel.delete(carId._id);
      expect(result).to.be.deep.equal(deletedCar);
    });
  });
});