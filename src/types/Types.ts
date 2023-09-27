export type ContactTypes = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ProductCardTypes = {
  // id: string;
  // image: string;
  title: string;
  subtitle?: string;
  price: number;
};

export type NewProductType = {
  category: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
};
