import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// Layout
import { Layout } from '../layout/Layout'
// Views
import { HomeView } from '../views/Home';
import { NotFoundView } from '../views/NotFound';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Layout>
          <HomeView/>
        </Layout>
      </Route>
      <Route component={NotFoundView} path="/404" />
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);