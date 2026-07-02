import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);
// @ts-expect-error - schema is required for relational queries but types are omitted in Drizzle v1-rc
export const db = drizzle({ client: sql, schema });