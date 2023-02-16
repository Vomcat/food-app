import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

import { Props } from "interfaces/Ui";

const ReactPortal: React.FC<Props> = ({ children }) => {
  const element = document.getElementById("overlay-root") as HTMLElement;

  return createPortal(children, element);
};

export default ReactPortal;
