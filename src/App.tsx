import React from 'react';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tag';
import NoMatch from './views/NoMatch';


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





export default App;
