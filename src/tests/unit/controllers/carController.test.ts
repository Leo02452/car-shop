import { expect } from 'chai';
import { Request, Response } from 'express';
import Sinon, * as sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import {
  carBody,
  cardToUpdate,
  carId,
  createdCar,
} from '../../mocks/carMocks';

describe('Car Controller', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  
  const req = {} as Request; 
  const res = {} as Response;

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(sinon.restore);

  describe('create', () => {
    it('should return a 201 http status and a created car', async () => {
      sinon.stub(carService, 'create').resolves(createdCar);

      req.body = carBody;
      await carController.create(req, res);

      const statusStub = res.status as sinon.SinonStub
      const jsonStub = res.json as sinon.SinonStub

      expect(statusStub.calledWith(201)).to.be.true;
      expect(jsonStub.calledWith(createdCar)).to.be.true;
    });
  });

  describe('list', () => {
    it('should return a 200 http status and a list of cars', async () => {
      sinon.stub(carService, 'list').resolves([createdCar]);

      await carController.list(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([createdCar])).to.be.true;
    });
  });

  describe('get by id', () => {
    it('should return a 200 http status and a car', async () => {
      sinon.stub(carService, 'getById').resolves(createdCar);

      req.params = { id: carId._id };
      await carController.getById(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(createdCar)).to.be.true;
    });
  });

  describe('update', () => {
    it('should return a 200 http status and an updated car', async () => {
      sinon.stub(carService, 'update').resolves({ ...carId, ...cardToUpdate });

      req.params = { id: carId._id };
      req.body = cardToUpdate;

      await carController.update(req, res);

      const statusStub = res.status as Sinon.SinonStub;
      const jsonStub = res.json as Sinon.SinonStub;

      expect(statusStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith({ ...carId, ...cardToUpdate })).to.be.true;
    })
  })
});