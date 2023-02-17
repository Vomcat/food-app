export interface ProductItemProps {
  id: number;
  imageURI: string;
  name: string;
  price: number;
}

export interface ProductSortBarProps {
  changeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
