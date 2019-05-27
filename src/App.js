import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from './common/constant';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Link to="/characters">Characters' List</Link> <br />
        <Link to="/character/{:id}">Detail</Link>
        {routes.map((route, idx) => (
          <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          component={route.component}
          />
          ))}
      </Router>
    </Provider>
  );
}

export default App;