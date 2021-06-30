// TODO: Ref to server
export const CATEGORIES = {
  'UI DESIGN': 1,
  'GRAPHIC DESIGN': 2,
} as const; // union
export type CategoriesKey = keyof typeof CATEGORIES;
export type CategoriesValue = typeof CATEGORIES[CategoriesKey];

export enum MAIN_ROUTE_NAMES {
  'ui-designs' = 'ui-designs',
  'graphic-designs' = 'graphic-designs',
  'designer' = 'designer'
}
