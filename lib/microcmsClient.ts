import { createClient } from "microcms";
import "dotenv/load.ts";

export const microcmsClient = createClient({
  serviceDomain: "my-updating-logs",
  apiKey: Deno.env.get("X_API_KEY"),
});
