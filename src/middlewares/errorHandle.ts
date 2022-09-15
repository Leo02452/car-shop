import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

const errorHandler: ErrorRequestHandler = ( 
  err: Error | ZodError, 
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) { 
    return res.status(400).json({ message: err.issues });
  }

  console.error(err);
  return res.status(500).json({ message: 'internal error' });
};

export default errorHandler;