import styled from 'styled-components';

export const NotFoundWrapper = styled.main`
  height: 100%;
  width: 100%;
  position: fixed;
  /* margin-top: 50px; */
  background: url(${process.env.PUBLIC_URL + 'assets/stars.jpeg'});
  background-size: cover;
  overflow-y: hidden;
  display: flex;
  align-items: center;
`;

export const NotFoundCard = styled.div`
  padding: 16px;
  position: relative;
  margin: 0 auto;
  width: 300px;
  height: 200px;
  background-color: #263238;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #263238;
  h1 {
    color: blueviolet;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 32px;
    color: white;
  }
  button {
    background-color: #333;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    color: #fff;

    :hover {
      filter: opacity(0.6);
      transition: 400ms;
    }
  }
`;
