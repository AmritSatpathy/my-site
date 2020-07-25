import React from 'react';
import './App.css';
import VerticalTabs from './components/Vert.jsx'
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="bg"><br/><br/><VerticalTabs/></div>
      </header>
    </div>
  );
}
App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;
