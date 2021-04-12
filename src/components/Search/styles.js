import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  background-color: #343434;
  color: #fff;
  border-radius: 0.5rem;
  :focus {
    border: gray;
  }

  @media (max-width: 900px) {
    max-width: 280px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  width: 400px;

  @media (max-width: 900px) {
    width: 100%;
    margin: 0 auto;
    max-width: 300px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;
