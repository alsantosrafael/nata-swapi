import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

export const CardsSection = styled.section`
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  /* margin-top: 32px; */
  max-width: 900px;
  height: 500px;
  border: 1px solid white;
  margin-left: 2.5rem;
  padding: 1rem 1.5rem;
`;

export const Card = styled.div`
  width: 180px;
  height: 150px;
  background-color: #fff;
`;

export const ActionButton = styled.button`
  background-color: #333;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    filter: opacity(0.9);
    transition: 400ms;
  }
`;
