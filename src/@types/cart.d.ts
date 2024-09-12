export type SelectedProduct = {
  id: number;
  name: string;
  amount: number;
  modifierName?: string;
  price: number;
  ccySymbol: string;
};

export type Cart = {
  products: SelectedProduct[];
};
