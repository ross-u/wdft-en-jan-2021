import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Foods from './components/Foods';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Foods />
      </div>
    );
  }
}

export default App;
