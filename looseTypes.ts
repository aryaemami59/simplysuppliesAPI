export type Items = {
  id: number;
  name: string;
  itemNumber: string;
  keywords: string[];
  category: string[];
  vendors: string[];
  src: string;
}[];

export type VendorObj = {
  id: number;
  officialName: string;
  abbrName: string;
  link: string;
  joinChars: string;
  itemIds: number[];
};

export type Vendors = Record<string, VendorObj>;

export type CategoryObj = {
  id: number;
  itemIds: number[];
};

export type Categories = Record<string, CategoryObj>;

export type Main = {
  items: Items;
  vendors: Vendors;
  categories: Categories;
};
