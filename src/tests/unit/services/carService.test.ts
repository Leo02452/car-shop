import * as sinon from 'sinon';
import { expect, use } from 'chai';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import CarService from '../../../services/CarService';
import {
  carBody,
  createdCar,
} from '../../mocks/carMocks';

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

});