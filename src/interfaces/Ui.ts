export interface Props {
  children: React.ReactNode;
}

export interface ButtonProps extends Props {
  type?: "button" | "submit" | "reset" | undefined;
  color?: "default" | "red";
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonPlusProps {
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
