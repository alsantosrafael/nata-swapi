import React from 'react';
import { Link } from 'react-router-dom';

import { NotFoundWrapper, NotFoundCard } from './styles';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundCard>
        <h1>Page not found...</h1>
        <p>Looks like you got yourself lost!</p>
        <Link to="/home">
          <button>Navigate home</button>
        </Link>
      </NotFoundCard>
    </NotFoundWrapper>
  );
};

export default NotFound;
