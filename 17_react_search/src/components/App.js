import React, { Component } from 'react';

import AutoCompleteText from './AutoCompleteText';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Search</h1>
        </header>
         <AutoCompleteText text="Dynamic text" />
      </div>
    );
  }
}

export default App;
