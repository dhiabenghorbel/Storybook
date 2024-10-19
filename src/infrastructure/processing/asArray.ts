export const asArray = <T>(obj: T | T[] | undefined): T[] => {
  if (!obj) return [];

  if (Array.isArray(obj)) return obj;

  return [obj];
};
