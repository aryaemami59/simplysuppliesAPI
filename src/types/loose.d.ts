export type LooseItem = {
  readonly id: number;
  readonly name: string;
  readonly itemNumber: string;
  readonly keywords: readonly string[];
  readonly category: readonly string[];
  readonly vendors: readonly string[];
  readonly src: string;
};

export type LooseVendor = {
  readonly id: number;
  readonly officialName: string;
  readonly abbrName: string;
  readonly link: string;
  readonly joinChars: string;
  readonly itemIds: readonly number[];
};

export type LooseCategory = {
  readonly id: number;
  readonly itemIds: readonly number[];
  readonly name: string;
};

export type LooseItems = readonly LooseItem[];

export type LooseVendors = Readonly<Record<string, LooseVendor>>;

export type LooseCategories = Readonly<Record<string, LooseCategory>>;

export type LooseSupplies = {
  readonly items: LooseItems;
  readonly vendors: LooseVendors;
  readonly categories: LooseCategories;
};
