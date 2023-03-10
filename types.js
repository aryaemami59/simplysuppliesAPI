"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const items_json_1 = __importDefault(require("./items.json"));
const vendors_json_1 = __importDefault(require("./vendors.json"));
const navList_json_1 = __importDefault(require("./navList.json"));
// console.log(_items);
const itemsObj = { ...items_json_1.default };
const navsObj = { ...navList_json_1.default };
const navsList = { ...navsObj.navs };
const items = [...itemsObj.items];
const vendorsObj = { ...vendors_json_1.default };
const vendors = { ...vendorsObj.vendors };
let u = "kl";
console.log(typeof u);
const itemNames = [...items.map(({ name }) => name)];
const jj = ["10 Dram Vials", "13 Dram Vials"];
const ui = "";
let o = {
    id: 0,
    name: "10 Dram Vial",
    itemNumber: "09670503346",
    keywords: [
        "amber",
        "ten",
        "vials",
        "09670503346",
        "mck",
        "mckesson",
        "orderinsite",
        "oi",
    ],
    // MCK: true,
    // OI: true,
    nav: ["Vials"],
    vendors: ["MCK", "OI"],
    // src: "data:image/png;base64,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",
};
