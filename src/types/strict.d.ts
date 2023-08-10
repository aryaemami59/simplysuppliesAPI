// Categories
export type CategoryName =
  | "Vials"
  | "Caps"
  | "Liquid Bottles"
  | "Paper"
  | "FLAVORx"
  | "Immunization Supplies"
  | "PPE"
  | "BD Syringes"
  | "ReliOn Novolin Vials"
  | "ReliOn Novolin Flexpens"
  | "ReliOn Insulin Syringes"
  | "ReliOn Pen Needles"
  | "RX Bags"
  | "Neighborhood Technician Smocks"
  | "Supercenter Technician Smocks"
  | "Pharmacist Coats"
  | "Equipment"
  | "CardioCheck and A1C";

export type Category = {
  readonly id: number;
  readonly itemIds: readonly number[];
  readonly name: CategoryName;
};

export type Categories = {
  readonly [K in CategoryName]: {
    readonly id: number;
    readonly itemIds: readonly number[];
    readonly name: K;
  };
};

// Vendors
export type VendorHelper = {
  readonly MCK: "McKesson";
  readonly OI: "OrderInsite";
  readonly GNFR: "GNFR";
  readonly SOC: "Sign Order Catalog";
  readonly VS: "VaxServe";
  readonly MS: "MCK MedSurge";
  readonly COV: "Covap";
  readonly FORS: "FORS";
};

export type VendorName = keyof VendorHelper;

export type OfficialVendorName = VendorHelper[VendorName];

export type Vendors = {
  readonly [K in VendorName]: {
    readonly id: number;
    readonly officialName: VendorHelper[K];
    readonly abbrName: K;
    readonly link: string;
    readonly joinChars: string;
    readonly itemIds: readonly number[];
  };
};

export type Vendor = Vendors[VendorName];

// Items
export type Item = {
  readonly id: number;
  readonly name: string;
  readonly itemNumber: string;
  readonly keywords: readonly string[];
  readonly category: readonly CategoryName[] | readonly [];
  readonly vendors: readonly VendorName[];
  readonly src: string;
};

export type Items = readonly Item[];

export type Main = {
  readonly items: Items;
  readonly vendors: Vendors;
  readonly categories: Categories;
};
