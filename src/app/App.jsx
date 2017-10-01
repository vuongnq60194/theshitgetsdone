import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import axios from 'axios';

import Home from './Home';
import About from './About';
import ErrorPage from './ErrorPage';

class App extends React.Component {
  componentDidMount() {
    axios.get(`api/test`)
      .then(res => {
        console.log(res)
      });
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={ErrorPage}/>
      </Router>
    );
  }
}

export default App;