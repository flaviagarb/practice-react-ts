import type { Tag } from "./tag-types";

export interface Adverts {
  id: number;
  name: string;
  sale: boolean;
  price: number;
  tags: Tag[];
  photo?: string;
}
