import styled from 'styled-components';

export const Container = styled.section`
  background-color: transparent;
  display: flex;
  /* margin-top: 32px; */
  width: 300px;
  height: 500px;
  border: 1px solid white;
  margin-left: 2.5rem;
  padding: 1rem 1.5rem;
`;

export const Portrait = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid #0d2d63;
  width: 200px;
  height: 200px;
  background: url(${process.env.PUBLIC_URL + 'assets/profile.jpeg'}) center;
  background-size: cover;
`;
