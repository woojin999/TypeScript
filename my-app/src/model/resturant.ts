// let data = {
//     name: "식당",
//     category: "western",
//     address: {
//       city: "seoul",
//       detail: "somewhere",
//       zipCode: 123123,
//     },
//     menu: [
//       { name: "tomato pasta", price: 2000, category: "pasta" },
//       { name: "garlic steak", price: 2000, category: "steak" },
//     ],
//   };

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

export type AddressWithoutZip = Omit<Address, "zipCode">;

export type RestaurantOnlyCategory = Pick<Restaurant, "category">;

export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};
export type ResturantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;
