import { z } from 'zod';
import { IVehicle } from './IVehicle';

const CarZodSchema = z.object({
  doorsQty: z.number().int().min(2).max(4),
  seatsQty: z.number().int().min(2).max(7),
});

export type ICar = IVehicle & z.infer<typeof CarZodSchema>;
