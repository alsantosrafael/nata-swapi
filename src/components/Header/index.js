import React from 'react';
import { LogoContainer, HeaderComponent } from './styles';
import Search from '../Search';
import Menu from '../Menu';
const Header = () => {
  return (
    <HeaderComponent>
      <LogoContainer>
        <img src={process.env.PUBLIC_URL + 'assets/logo.png'} alt="logo" />
      </LogoContainer>
      <Menu />
      <Search />
    </HeaderComponent>
  );
};

export default Header;
