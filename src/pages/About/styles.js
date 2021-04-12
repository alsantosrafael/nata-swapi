import styled from 'styled-components';

export const Container = styled.section`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 500px;
  border: 1px solid white;
  margin-left: 2.5rem;
  padding: 1rem 1.5rem;

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

export const Portrait = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid #0d2d63;
  width: 200px;
  height: 200px;
  background: url(${process.env.PUBLIC_URL + 'assets/profile.jpeg'}) center;
  background-size: cover;
  margin-bottom: 16px;
`;

export const Anchor = styled.a`
  color: #fff;
  margin-bottom: 16px;
  span {
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      margin-right: 8px;
    }
  }

  :nth-child(2n) {
    img {
      filter: invert(100%);
    }
  }
`;
