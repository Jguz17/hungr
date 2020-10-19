import React from 'react';
import Home from './components/pages/Home'
import './App.css';
import './responsive/responsive.css';
import AlertState from './context/alert/AlertState'
import DisabledState from './context/disabled/DisabledtState'
import FormValidationState from './context/formValidation/FormValidationState'

function App() {
  return (
    <FormValidationState>
      <DisabledState>
        <AlertState>
          <div className="App">
            <Home />
          </div>
        </AlertState>
      </DisabledState>
    </FormValidationState>
  );
}

export default App;