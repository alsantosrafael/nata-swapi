import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={['/', '/home']} component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
    </Switch>
  );
};

export default Routes;
