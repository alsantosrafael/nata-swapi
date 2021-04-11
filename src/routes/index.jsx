import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={['/', '/home']} component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
