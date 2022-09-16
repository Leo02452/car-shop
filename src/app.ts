import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandle';
import carRoute from './routes/CarRoute';
import motorcycleRoute from './routes/MotorcycleRoute';

const app = express();

app.use(express.json());

app.use('/cars', carRoute);
app.use('/motorcycles', motorcycleRoute);
app.use(errorHandler);

export default app;
