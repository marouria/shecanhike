export type InspirationColors =
  | "blue"
  | "cyan"
  | "light_blue"
  | "gray"
  | "yellow"
  | "brown"
  | "orange"
  | "red";

export interface Inspiration {
  title: string;
  icon: string;
  color: InspirationColors;
}
