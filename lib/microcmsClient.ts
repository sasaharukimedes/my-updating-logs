import { createClient } from "microcms";
import "dotenv/load.ts";

export const microcmsClient = createClient({
  serviceDomain: Deno.env.get("X_SERVICE_DOMAIN"),
  apiKey: Deno.env.get("X_API_KEY"),
});
