import styled from 'styled-components';

export const Nav = styled.nav`
  width: 280px;
  display: flex;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    li {
      list-style-type: none;
      margin-left: 3rem;
      color: #333;
      text-decoration: none;
      font-size: 1.25rem;

      .selected {
        /* padding: 8px; */
        /* background-color: #3e6db6; */
        /* border-radius: 8px; */
        transition: color 800ms ease-in-out;
        color: #db7093;
      }
    }
    @media (max-width: 900px) {
      margin: 16px;
    }
  }
`;
