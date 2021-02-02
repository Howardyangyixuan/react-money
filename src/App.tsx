import React from 'react';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Components/Nav';
import Layout from './Components/Layout';


function App() {
  return (
    <Router>
      <Switch>
        <Redirect from="/" exact to="/tags"/>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>Statistics</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>Tags</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>Money</h2>
    </Layout>
  );
}

function NoMatch() {
  return <h2>404</h2>;
}

export default App;
