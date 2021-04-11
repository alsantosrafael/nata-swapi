import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
// const darthImg = require('../assets/darth.jpeg');
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  * {
    margin: 0;
    padding: 0;
	border: 0;
	font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  body {
	min-width: 100vh;

  }
  li {
      list-style-type: none;
  }
  a{
	  text-decoration: none;
	  color: black;
	  :hover {
		  color: #182c3e;
		  transition: 400ms;
	  }
  }
  button{
	  outline: none;
  }


`;

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
  /* margin-top: 50px; */
  background: url(${process.env.PUBLIC_URL + 'assets/darth.jpeg'});
  background-size: cover;
  overflow-y: hidden;
  @media (max-width: 768px) {
    background-size: 100% 100%;
  }
`;
export default GlobalStyle;
