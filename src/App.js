import React from 'react';
import './App.css';
import styled from "styled-components"

const AppPage = styled.div`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
`

const App = () => {
  return (
    <AppPage>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </AppPage>
  );
}

export default App;
