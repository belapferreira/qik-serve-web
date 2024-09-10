type Image = {
  id: number;
  image: string;
};

type ProductModifier = {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
  qty?: number;
};

type Modifier = {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ProductModifier[];
};

type Product = {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible?: number;
  availabilityType: string;
  sku?: string;
  images?: Image[];
  available: boolean;
  modifiers?: Modifier[];
};

export type Section = {
  id: number;
  name: string;
  description?: null;
  position: number;
  visible?: number;
  images: Image[];
  items: Product[];
};

export type Menu = {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: Section[];
};
