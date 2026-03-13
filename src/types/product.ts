export type Product = {
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  id: number;
  slug?: string;
  description?: string;
  category?: {
    title: string;
    slug?: string;
  };
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
