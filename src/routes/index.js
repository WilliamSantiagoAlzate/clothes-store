import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// Layout
import { MainLayout } from '../layout/MainLayout'
import { CartLayout } from '../layout/CartLayout'
// Views
import { HomeView } from '../views/Home';
import { CartView } from '../views/Cart';
import { NotFoundView } from '../views/NotFound';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainLayout>
          <HomeView/>
        </MainLayout>
      </Route>
      <Route exact path="/carrito">
        <CartLayout>
          <CartView/>
        </CartLayout>
      </Route>
      <Route component={NotFoundView} path="/404" />
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);