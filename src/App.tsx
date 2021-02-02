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

const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`;

const Main = styled.div`
flex-grow: 1;
//自己的区域加滚动条
overflow: auto;
`;


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function Statistics() {
  return <h2>Statistics</h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Money() {
  return (
    <>
      <h2>Money </h2>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
      <p>h</p>
    </>
  );

}

function NoMatch() {
  return <h2>404</h2>;
}

export default App;
