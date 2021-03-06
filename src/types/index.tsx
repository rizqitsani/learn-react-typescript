export type ItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
};

export type InitialStateType = {
  cartItems: ItemType[];
};
