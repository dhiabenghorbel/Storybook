import { Occurrence } from "../../../../app/models/IOcurrence.ts";
import { Item, Blob } from "../../../../app/models/Item.ts";
import { asArray } from "../../general/asArray.ts";

/**
 * Finds the first value that matches for a specific item name within a given Occurrence or Occurrence[]
 * @param occ Occurrence | Ocurrence[]
 * @param itemName String
 * @param nulign string
 * @param sibiling Item
 *
 */
const findValueFromOccurrence = (occ?: Occurrence | Occurrence[], itemName?: string, nulign?: string, sibling?: Item): string | undefined | Blob => {
  if (!occ || !itemName) return undefined;
  let items: Item[] = [];

  if (sibling && Array.isArray(occ)) {
    let result: Occurrence[] = [];
    occ.map(r => {
      if (Array.isArray(r.data)) {
        let val = r.data.filter(i => i.item === sibling.name)[0].value;
        if (val === sibling.value) {
          result.push(r);
        }
      }
      return null;
    });
    items = result.reduce((acc: Item[], curr: Occurrence) => {
      return [...acc, ...asArray(curr.data)];
    }, []);
  } else if (nulign && Array.isArray(occ)) {
    occ.forEach((e: Occurrence) => {
      const item: Item = asArray(e.data).find((i: Item) => i.item === "NULIGN" && i.value === nulign);
      if (item) items.push(...asArray(e.data));
    });
  } else if (Array.isArray(occ)) {
    items = occ.reduce((acc: Item[], curr: Occurrence) => {
      return [...acc, ...asArray(curr.data)];
    }, []);
  } else if (nulign && occ && occ.data) {
    const item: Item = asArray(occ.data).find((i: Item) => i.item === "NULIGN" && i.value === nulign);
    if (item) items.push(...asArray(occ.data));
  } else if (occ && occ.data) {
    items = Array.isArray(occ.data) ? occ.data : [occ.data];
  }
  const found: Item | undefined = items.find(i => i.item === itemName);
  if (found) return found.value ? found.value : found.blob;
  return undefined;
};

export default findValueFromOccurrence;
