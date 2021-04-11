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
`;

export const Label = styled.label`
  background-color: transparent;
  color: #f8e71b;
  font-size: 3rem;
`;

export const Form = styled.form`
  width: 400px;
`;

export const Button = styled.button`
  height: 42px;
  width: 20%;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;
