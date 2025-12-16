export type CategoryId = 'hombre' | 'mujer' | 'nino' | 'nina' | 'tecnologia';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: CategoryId;
  imageUrl: string;
  amazonLink: string;
  isBestSeller?: boolean;
  discount?: string;
  rating?: number;
}

export interface CategoryData {
  id: CategoryId;
  label: string;
  title: string;
  description: string;
}