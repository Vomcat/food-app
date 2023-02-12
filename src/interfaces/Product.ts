export interface ProductItemProps {
  id: number;
  imageURI: string;
  name: string;
  price: number;
}

export interface ProductSearchBarProps {
  changeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
