import React from 'react';
import axios from 'axios';
import PizzaList from '../PizzaList/PizzaList.jsx';
import './App.css';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';
import Home from '../Home/Home.jsx';

import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min.js';

function App() {

  return (

    <>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>

      </div>

      <Router>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/order'>
          <PizzaList />
        </Route>

        <Route exact path='/address-info'>
          <CustomerForm />
        </Route>

      </Router >

    </>

  );
}

export default App;
