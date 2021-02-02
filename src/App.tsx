import React from 'react';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';

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

const Nav = styled.nav`
  box-shadow: 0 0 3px rgb(0,0,0,0.25);
  > ul{
    display: flex;
    > li{
      text-align: center;
      width: 33.3%;
      padding: 16px;
    }
}
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
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
