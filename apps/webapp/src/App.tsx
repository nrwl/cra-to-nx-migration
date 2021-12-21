import React, { useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import { UiButton } from '@acme/ui-button';

function App() {
  const learnMore = useCallback(() => {
    window.location.assign('https://reactjs.org');
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <UiButton onClick={learnMore}>Learn React</UiButton>
      </header>
    </div>
  );
}

export default App;
