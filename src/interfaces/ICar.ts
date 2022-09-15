import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

export const carZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number().int().min(2).max(4),
  seatsQty: z.number().int().min(2).max(7),
});

export type ICar = z.infer<typeof carZodSchema>;
