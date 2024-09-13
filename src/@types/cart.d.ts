export type SelectedProduct = {
  id: number;
  name: string;
  amount: number;
  modifierName?: string;
  modifierId?: number;
  price: number;
  ccySymbol: string;
};

export type Cart = {
  products: SelectedProduct[];
};
