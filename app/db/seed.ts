import { reset, seed } from "drizzle-seed";

import { db } from "@/db";
import * as schema from "@/db/schema";

async function main() {
  await reset(db, schema);
  // await seed(db, { jobs: jobsTable });
}

main();
