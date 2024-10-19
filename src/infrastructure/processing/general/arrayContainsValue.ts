export const arrayContainsValue = (list?: any[], value?: any, searchById?: boolean): boolean => {
  if (!list) return false;
  if (!value) return false;
  for (let i = 0; i < list.length; i++) {
    if (searchById) {
      if (list[i].id === value.id) {
        return true;
      }
    }
    if (JSON.stringify(list[i]) === JSON.stringify(value)) {
      return true;
    }
  }
  return false;
};
