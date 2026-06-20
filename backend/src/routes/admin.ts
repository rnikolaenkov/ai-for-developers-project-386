import type { FastifyInstance } from "fastify";
import { validateOptionalTimestamp } from "../domain/validation.js";
import type { BookingService } from "../domain/bookingService.js";

export async function registerAdminRoutes(app: FastifyInstance, service: BookingService) {
  app.get("/admin/event-types", async () => service.listEventTypes());

  app.post("/admin/event-types", async (request, reply) => {
    const created = service.createEventType(request.body);
    return reply.code(201).send(created);
  });

  app.get("/admin/bookings", async (request) => {
    const query = request.query as { from?: string };
    const from = validateOptionalTimestamp(query.from, "from");
    return service.listUpcomingBookings(from);
  });
}
