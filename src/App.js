import React from 'react';
import './App.css';
import Layout from './component/layout/layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';


function App() {
  return (
    <Layout>
      <BurgerBuilder />
    </Layout>
  );
}

export default App;
