import styled from "styled-components";
import { colors, respondFrom, breakpoints, dimensions } from "styles";

import { ModalProps } from "interfaces/Ui";

import ReactPortal from "components/Ui/ReactPortal";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  z-index: 10000;
  overflow: hidden;
`;

const ModalMain = styled.div`
  width: 90%;
  height: 98%;
  background-color: ${colors.white};
  padding: ${dimensions.spacing.md3}px;
  overflow-y: auto;
  overflow-x: hidden;

  ${respondFrom(breakpoints.tablet)`
    width: 70%;
    height: 90%;
  `}
`;

const Modal = (props: ModalProps) => {
  const { isOpen, children } = props;

  if (!isOpen) return null;

  return (
    <ReactPortal>
      <ModalOverlay>
        <ModalMain>{children}</ModalMain>
      </ModalOverlay>
    </ReactPortal>
  );
};

export default Modal;
