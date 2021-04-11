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
  max-width: 900px;
  height: 500px;
  /* border: 1px solid #263238; */
  border-radius: 16px;
  margin-left: 2.5rem;
  padding: 1rem 1.5rem;
  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.1);
  transition: all 400ms ease-in-out;
`;

export const Card = styled.div`
  width: 180px;
  height: 150px;
  background-color: transparent;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  border: 2px solid #263238;
  border-radius: 8px;
  padding: 4px 8px;
  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.1);
  :hover {
    transform: scale(1.1);
    background-color: #263238;
  }

  h3 {
    color: #5197b5;
    margin-bottom: 8px;
  }
  .stops {
    color: #ff4d4d;
  }
  p + p {
    margin-top: 4px;
    color: #f7f7f7;
  }
`;

export const ActionButton = styled.button`
  background-color: transparent;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  :hover {
    filter: opacity(0.6);
    transition: 400ms;
  }
`;

export const Organizer = styled.article`
  display: flex;
  width: 615px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-left: 3rem;
  margin-bottom: 8px;
  background-color: #182c3e;
  padding: 8px 16px;
  filter: opacity(0.8);
  border-radius: 8px;
`;
