import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL!;

// Cache connection in development to avoid creating multiple clients during hot-reloads
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const client = globalForDb.conn ?? postgres(connectionString);
if (process.env.NODE_ENV !== "production") globalForDb.conn = client;

// @ts-expect-error - schema is required for relational queries but types are omitted in Drizzle v1-rc
export const db = drizzle({ client, schema });