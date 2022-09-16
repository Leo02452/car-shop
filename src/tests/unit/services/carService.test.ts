import * as sinon from 'sinon';
import { expect, use } from 'chai';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import CarService from '../../../services/CarService';
import {
  carBody,
  cardToUpdate,
  carId,
  createdCar,
  deletedCar
} from '../../mocks/carMocks';
import chaiAsPromised from 'chai-as-promised';

use(chaiAsPromised);

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  after(sinon.restore);

  describe('create', () => {
    it('should return a created car if model returns a created car', async () => {
      sinon
        .stub(carModel, 'create')
        .resolves(createdCar);
      
      const result = await carService.create(carBody);
      expect(result).to.be.deep.equal(createdCar);
    });
  });

  describe('list', () => {
    it('should return a list of cars if model returns a list of cars', async () => {
      sinon
        .stub(carModel, 'read')
        .resolves([createdCar]);
      
      const result = await carService.list();
      expect(result).to.be.deep.equal([createdCar]);
    });
  });

  describe('get by id', () => {
    it('should return a car if model returns a car', async () => {
      sinon
        .stub(carModel, 'readOne')
        .resolves(createdCar);
      
      const result = await carService.getById(carId._id);
      expect(result).to.be.deep.equal(createdCar);
    });
  });

  describe('update', () => {
    it('should return an updated car if model returns an updated car', async () => {
      sinon
        .stub(carModel, 'update')
        .resolves({ ...carId, ...cardToUpdate });
      
      const result = await carService.update(carId._id, cardToUpdate);
      expect(result).to.be.deep.equal({ ...carId, ...cardToUpdate });
    });
  });

  describe('delete', () => {
    it('should return a deleted car if model return a deleted car', async () => {
      sinon
        .stub(carModel, 'delete')
        .resolves(deletedCar);
      
      return expect(carService.delete(carId._id)).to.eventually.be.undefined;
    });
  });
});