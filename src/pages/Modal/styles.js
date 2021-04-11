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
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 340px;
  padding: 8px 16px;
  background-color: #374952;
  z-index: 10;
  border-radius: 16px;
  overflow-y: hidden;
  border: 2px solid #263238;
  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.1);

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: space-between; */
    width: 300px;
    min-height: 450px;
    z-index: 3;
    padding: 1rem 2rem;
  }

  h3 {
    color: #5197b5;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 4px;
    color: #f7f7f7;
  }
`;
