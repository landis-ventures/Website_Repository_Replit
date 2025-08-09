import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const consultations = pgTable("consultations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company").notNull(),
  automationNeeds: text("automation_needs").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertConsultationSchema = createInsertSchema(consultations).omit({
  id: true,
  createdAt: true,
});

export type InsertConsultation = z.infer<typeof insertConsultationSchema>;
export type Consultation = typeof consultations.$inferSelect;

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
