import React, { Component } from 'react';
import styled from 'styled-components';

export default class MemoryCard extends Component {
  render() {
    return (
      <MemoryCardBoard>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
        <MemoryCardStyles>
          <img src="/assets/digitalcrafts-logo-white-y.png" alt="DC logo" />
        </MemoryCardStyles>
      </MemoryCardBoard>
    );
  }
}

const MemoryCardBoard = styled.div`
  margin: auto;
  max-width: 625px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 1 25%;
`;

const MemoryCardStyles = styled.div`
  background: repeating-radial-gradient(
    circle,
    purple,
    purple 10px,
    #4b026f 10px,
    #4b026f 20px
  );
  display: inline-block;
  width: 150px;
  height: 80px;
  margin: 3px;
  border-radius: 5px;
  border: solid 3px navy;
  cursor: pointer;

  img {
    width: 100%;
    padding-top: 13px;
  }
`;
