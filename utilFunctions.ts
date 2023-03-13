import { Categories } from "./items";
import { Items } from "./looseTypes";

export const getItemsInOneCategory = (
  category: keyof Categories,
  categories: Categories,
  items: Items
) => categories[category].itemIds.map(e => items.find(({ id }) => id === e));
