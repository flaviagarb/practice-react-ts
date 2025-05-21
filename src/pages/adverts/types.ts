export interface Adverts {
  name: string;
  sale: boolean;
  price: number;
  tags: ("lifestyle" | "mobile" | "motor" | "work")[];
  photo: string;
}
