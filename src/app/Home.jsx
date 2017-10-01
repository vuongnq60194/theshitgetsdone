import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>home</h1>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Home;