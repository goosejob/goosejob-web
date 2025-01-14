import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

const id = uuid("id").defaultRandom().primaryKey();
const createdAt = timestamp("created_at").notNull().defaultNow();
const updatedAt = timestamp("updated_at").$onUpdate(() => new Date());

export const usersTable = pgTable("users", {
  id,
  fullname: text("fullname").notNull(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  createdAt,
  updatedAt,
});

export const usersRelations = relations(usersTable, ({ many }) => ({
  jobs: many(jobsTable),
  posts: many(postsTable),
}));

export const jobsTable = pgTable("jobs", {
  id,
  title: text("title").notNull(),
  description: text("description"),
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  createdAt,
  updatedAt,
});

export const jobsRelations = relations(jobsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [jobsTable.userId],
    references: [usersTable.id],
  }),
}));

export const postsTable = pgTable("posts", {
  id,
  title: text("title").notNull(),
  content: text("content").notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  createdAt,
  updatedAt,
});

export const postsRelations = relations(postsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [postsTable.userId],
    references: [usersTable.id],
  }),
}));

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertJob = typeof jobsTable.$inferInsert;
export type SelectJob = typeof jobsTable.$inferSelect;

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;
