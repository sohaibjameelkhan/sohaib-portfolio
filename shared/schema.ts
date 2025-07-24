import { pgTable, text, serial, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const personalInfo = pgTable("personal_info", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  linkedin: text("linkedin"),
  github: text("github"),
  location: text("location").notNull(),
  summary: text("summary").notNull(),
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"),
  location: text("location").notNull(),
  position: text("position").notNull(),
  company: text("company").notNull(),
  description: text("description").notNull(),
  achievements: text("achievements").array(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  year: text("year").notNull(),
  country: text("country"),
  description: text("description").notNull(),
  achievements: text("achievements").array(),
  technologies: text("technologies").array(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  items: text("items").array().notNull(),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date").notNull(),
  location: text("location").notNull(),
  degree: text("degree").notNull(),
  institution: text("institution").notNull(),
});

export const insertPersonalInfoSchema = createInsertSchema(personalInfo).omit({
  id: true,
});

export const insertExperienceSchema = createInsertSchema(experiences).omit({
  id: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
});

export const insertSkillSchema = createInsertSchema(skills).omit({
  id: true,
});

export const insertEducationSchema = createInsertSchema(education).omit({
  id: true,
});

export type PersonalInfo = typeof personalInfo.$inferSelect;
export type InsertPersonalInfo = z.infer<typeof insertPersonalInfoSchema>;
export type Experience = typeof experiences.$inferSelect;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Skill = typeof skills.$inferSelect;
export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type Education = typeof education.$inferSelect;
export type InsertEducation = z.infer<typeof insertEducationSchema>;
