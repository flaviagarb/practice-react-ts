export interface Adverts {
  id: number;
  name: string;
  sale: boolean;
  price: number;
  tags: ("lifestyle" | "mobile" | "motor" | "work")[];
  photo?: string;
}
