import { IMassiveGrid } from "../Interfaces/IMassiveGrid";

/**
 * Return an array with only the modified data. It is called always that any change is done
 */
export const addModifiedData = (data: IMassiveGrid[], itemModified: IMassiveGrid, modifiedData: IMassiveGrid[], action: string = "add"): IMassiveGrid[] => {
  const itemById = data.filter(e => e["id"] === itemModified["id"]);
  let result: IMassiveGrid[] = [...modifiedData];
  result = result.filter(e => e["id"] !== itemModified["id"]).concat(itemById);
  return result;
};

/**
 * Return an array of fields when they are modified
 */
export const addModifiedFields = (fieldsModified: any[], item: IMassiveGrid, field: string): any[] => {
  const sub = fieldsModified.find(e => e.sub["id"] === item["id"]);
  if (sub) sub.fields.push(field);
  else {
    const obj = { sub: item, fields: [field] };
    fieldsModified.push(obj);
  }
  return fieldsModified;
};

/**
 * Return formated data after check values to be editable or readonly
 */
export const checkValuesRow = (formatedData: IMassiveGrid[], values: any[]): IMassiveGrid[] => {
  formatedData.map(d => {
    let edit = true;
    values.forEach((element: any) => {
      if (d[element.item])
        if (d[element.item] === element.value) {
          edit = false;
          return;
        }
    });
    d.inEdit = edit;
    return null;
  });
  return formatedData;
};

/**
 * Return a value from data formated by a item key
 */
export const getValuesFromData = (data: IMassiveGrid, item: string) => {
  return data[item];
};
