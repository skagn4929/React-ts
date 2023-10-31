// let data = {
//   name: "누나네식당",
//   category: "western",
//   address: {
//     city: "seoul",
//     detail: "somewhere",
//     zipcode: 231244,
//   },
//   menu: [
//     { name: "rose pasta", price: 2000, category: "PASTA" },
//     { name: "garlic steak", price: 2000, category: "STEAK" },
//   ],
// };

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = { city: string; detail: string; zipcode: number };

export type Menu = { name: string; price: number; category: string };

export type AddressWithoutZip = Omit<Address, "zipcode">;
export type RestaurantOnlycategory = Pick<Restaurant, "category">;
