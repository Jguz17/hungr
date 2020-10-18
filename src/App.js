import React from 'react';
import Home from './components/pages/Home'
import './App.css';
import './responsive/responsive.css';
import AlertState from './context/alert/AlertState'
import DisabledState from './context/disabled/DisabledtState'

function App() {
  return (
    <DisabledState>
      <AlertState>
        <div className="App">
          {/* <Alerts/> */}
          <Home />
        </div>
      </AlertState>
    </DisabledState>
  );
}

export default App;