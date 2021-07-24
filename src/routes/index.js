// Import react-router-dom components
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// Import views
import { HomeView } from '../views/Home';
import { NotFoundView } from '../views/NotFound';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact component={HomeView} path="/" />
      <Route component={NotFoundView} path="/404" />
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);