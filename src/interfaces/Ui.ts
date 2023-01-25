export interface Props {
  children: React.ReactNode;
}

export interface ButtonProps extends Props {
  type?: "button" | "submit" | "reset" | undefined;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonPlusProps {
  variant?: "default" | "grey";
  plusIcon?: boolean;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}
