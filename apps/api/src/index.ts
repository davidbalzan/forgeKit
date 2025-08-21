import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import "dotenv/config";
import { healthRoutes } from "./routes/health.js";

const app = new Hono();

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: process.env.CORS_ORIGIN ?? "http://localhost:5173",
  })
);

app.onError((err, c) => {
  console.error(`[Error] ${err.message}`);
  return c.json({ error: "Internal Server Error" }, 500);
});

app.route("/api", healthRoutes);

const port = Number(process.env.API_PORT) || 3000;

serve({ fetch: app.fetch, port }, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
