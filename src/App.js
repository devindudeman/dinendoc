import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './components/Home';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Playfair Display', serif;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;