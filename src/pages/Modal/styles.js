import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  overflow-y: hidden;
  height: 100vh;
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 339px;
  /* height: 342px; */
  padding: 8px 16px;
  background-color: #fff;
  box-shadow: 0px 3px 6px #00000029;
  z-index: 10;
  border-radius: 5px;
  overflow-y: hidden;

  @media (min-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 800px;
    min-height: 455px;
    z-index: 3;
    /* max-height: 500px; */
  }
`;
