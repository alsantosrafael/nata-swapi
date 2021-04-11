import { Nav } from './styles';
import { NavLink } from 'react-router-dom';

const routes = [
  {
    label: 'Home',
    link: '/home'
  },
  {
    label: 'About',
    link: '/about'
  }
];

const Menu = () => {
  return (
    <Nav>
      <ul>
        {routes.map(route => (
          <li key={route.label}>
            <NavLink activeClassName="selected" to={route.link}>
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default Menu;
