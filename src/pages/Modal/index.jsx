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
        <ModalWrapper ref={ref}>
          <h3>{showModal.name}</h3>
          <p>{showModal?.MGLT} MGLT</p>
          <p>{showModal?.cost_in_credits} credit(s)</p>
          <p>{showModal?.model}</p>
          <p>{showModal?.crew}</p>
          <p>{showModal?.consumables}</p>
          <p>{showModal?.max_atmosphering_speed}</p>
        </ModalWrapper>
      </ModalContainer>
    </>,
    document.getElementById('modal')
  );
};

export default Modal;
