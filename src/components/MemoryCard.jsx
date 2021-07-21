import React, { Component } from 'react';
import styled from 'styled-components';

export default class MemoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
  }

  clickHandler = () => {
    const { isFlipped } = this.state;
    this.setState({ isFlipped: !isFlipped });
  };

  render() {
    const { isFlipped } = this.state;
    return (
      <MemoryCardBoard>
        <MemoryCardStyles onClick={this.clickHandler}>
          <MemoryCardInner isFlipped={isFlipped}>
            <MemoryCardBack>
              <MemoryCardImage
                src="/assets/digitalcrafts-logo-white-y.png"
                alt="DC logo"
              />
            </MemoryCardBack>
            <MemoryCardFront>😃</MemoryCardFront>
          </MemoryCardInner>
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
  display: inline-block;
  width: 150px;
  height: 80px;
  margin: 5px;
  cursor: pointer;
  position: relative;
  perspective: 800px;
`;
const MemoryCardFront = styled.div`
  font-size: 30px;
  line-height: 20px;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const MemoryCardBack = styled.div`
  background: repeating-radial-gradient(
    circle,
    purple,
    purple 10px,
    #4b026f 10px,
    #4b026f 20px
  );
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const MemoryCardInner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 5px;
  border: 3px solid navy;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);

  ${({ isFlipped }) => isFlipped && `transform: rotateY(180deg);`}
`;
const MemoryCardOuter = styled.div``;

const MemoryCardImage = styled.img`
  width: 100%;
  padding-top: 13px;
`;
