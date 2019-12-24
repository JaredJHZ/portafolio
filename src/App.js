import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home/Home';
import Toolbar from './components/toolbar/toolbar';
function App() {
  return (
    <div className="layout">
        <Router>
      <div> 
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
