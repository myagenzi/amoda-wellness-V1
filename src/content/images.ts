import healthCoaching from "@/assets/category-health-coaching.jpg";
import lifeCoaching from "@/assets/category-life-coaching.jpg";
import nutrition from "@/assets/category-nutrition.jpg";
import yoga from "@/assets/category-yoga.jpg";
import diabetic from "@/assets/category-diabetic.jpg";
import type { CategorySlug } from "./categories";

export const categoryImage: Record<CategorySlug, string> = {
  "health-coaching": healthCoaching,
  "life-coaching": lifeCoaching,
  nutrition,
  yoga,
  "diabetic-solutions": diabetic,
};
