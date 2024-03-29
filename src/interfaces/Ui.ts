export interface Props {
  children: React.ReactNode;
}

export interface ButtonProps extends Props {
  type?: "button" | "submit" | "reset";
  color?: "default" | "red";
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonQuantityProps {
  variant?: "default" | "grey";
  plusIcon?: boolean;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ModalProps extends Props {
  isOpen: boolean;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface SectionProps extends Props {
  styles?: "fullHeight";
}
