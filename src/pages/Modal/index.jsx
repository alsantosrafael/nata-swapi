import React, { useContext, useRef } from 'react';
import ReactDom from 'react-dom';
import { GlobalContext } from '../../GlobalContext';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { ModalContainer, ModalWrapper } from './styles';

const Modal = () => {
  const { showModal, setShowModal } = useContext(GlobalContext);
  const ref = useRef();
  useOnClickOutside(ref, () => setShowModal(false));

  if (!showModal) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <ModalContainer>
        <ModalWrapper ref={ref} />
      </ModalContainer>
    </>,
    document.getElementById('modal')
  );
};

export default Modal;
