import { createPortal } from "react-dom";

import { Props } from "interfaces/Ui";

const ReactPortal = (props: Props) => {
  const { children } = props;

  const element = document.getElementById("overlay-root") as HTMLElement;

  return createPortal(children, element);
};

export default ReactPortal;
