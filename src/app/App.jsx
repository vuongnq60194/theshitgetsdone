import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div>
      {this.props.children}
      <h1>home</h1>
      </div>
    );
  }
}

export default App;