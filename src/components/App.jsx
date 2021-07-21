import React, { Component } from 'react';
import styled from 'styled-components';
import MemoryCard from './MemoryCard';

export default class App extends Component {
  render() {
    return (
      <>
        <AppHeader>
          <h1>Memory Game</h1>
          <h2>Match Cards To Win</h2>
        </AppHeader>
        <MemoryCard />
      </>
    );
  }
}

const AppHeader = styled.header`
  height: 30vh;
  background-color: #222222;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    font-size: 5rem;
  }
  h2 {
    color: #666;
  }
`;
