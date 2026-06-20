import Fastify, { type FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import { AppError } from "./domain/errors.js";
import { BookingService, type BookingServiceOptions } from "./domain/bookingService.js";
import { registerAdminRoutes } from "./routes/admin.js";
import { registerPublicRoutes } from "./routes/public.js";
import { MemoryStore } from "./store/memoryStore.js";

export interface BuildAppOptions {
  now?: BookingServiceOptions["now"];
  store?: MemoryStore;
}

export async function buildApp(options: BuildAppOptions = {}): Promise<FastifyInstance> {
  const app = Fastify();
  const store = options.store ?? new MemoryStore();
  const service = new BookingService({ store, now: options.now });

  await app.register(cors, {
    origin: true,
  });

  app.setErrorHandler((error, request, reply) => {
    if (error instanceof AppError) {
      return reply.code(error.statusCode).send(error.toResponse());
    }

    request.log.error?.(error);
    return reply.code(500).send({
      statusCode: 500,
      code: "unknown_error",
      message: "Internal Server Error",
    });
  });

  await registerAdminRoutes(app, service);
  await registerPublicRoutes(app, service);

  return app;
}
