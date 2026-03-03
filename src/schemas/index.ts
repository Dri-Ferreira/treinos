import z from "zod";

import { Weekday } from "../generated/prisma/enums.js";

export const ErrorScheama = z.object({
  error: z.string(),
  code: z.string(),
});

export const WorkoutPlanSchema = z.object({
  id: z.uuid(),
  name: z.string().trim().min(1).max(255),
  WorkoutDays: z.array(
    z.object({
      name: z.string().trim().min(1).max(255),
      weekday: z.enum(Weekday),
      isRest: z.boolean().default(false),
      estimatedDurationInSeconds: z.number().min(1),
      exercises: z.array(
        z.object({
          order: z.number().min(0),
          name: z.string().trim().min(1).max(255),
          sets: z.number().min(1),
          reps: z.number().min(1),
          restTimeInSeconds: z.number().min(1),
        }),
      ),
    }),
  ),
});
