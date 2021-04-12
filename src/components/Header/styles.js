import styled from 'styled-components';

export const LogoContainer = styled.div`
  img {
    width: 300px;
  }
`;

export const HeaderComponent = styled.header`
  width: 100%;
  display: flex;
  padding: 0.5rem 2rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
