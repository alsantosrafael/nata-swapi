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
	@media (max-width: 900px){
		min-width: 100%
	}

  }
  li {
      list-style-type: none;
  }
  a{
	  text-decoration: none;
	  color: #FFF;
	  :hover {
		  color: #182c3e;
		  transition: 400ms;
	  }
  }
  button{
	  outline: none;
  }
  h2{
	  color: #FFF;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
	 margin: 0;
   }

   input[type=number] {
	 -moz-appearance: textfield;
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

  @media (max-width: 900px) {
    background-size: 100% 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export default GlobalStyle;
