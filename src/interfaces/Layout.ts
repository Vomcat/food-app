export interface Props {
  children: React.ReactNode;
}

export interface ButtonProps {}

export interface ButtonPlusProps {
  variant?: "default" | "grey";
  plusIcon?: boolean;
  clickHandler?: () => void;
}
