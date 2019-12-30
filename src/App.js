import React from 'react';
import './App.css';
import Layout from './hoc/layout/layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/checkout/checkout';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Orders from './container/orders/orders';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/orders" component={Orders} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
