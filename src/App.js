import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Comic Sans MS', cursive, sans-serif;
    background-color: #f5e5dc;
    color: #333;
    margin: 0;
    padding: 0;
  }
`;

const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;