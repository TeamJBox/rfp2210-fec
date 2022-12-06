/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Model = styled.div`
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
`;

const InnerModel = styled.div`
  background-color: white;
  margin: 8% 30%;
  height: 60vh;

  @media screen and (max-width: 1100px) {
    margin: 8% 25%;
  }

  @media screen and (max-width: 800px) {
    margin 8% 15%;
  }
`;

const StyledColumn = styled.div`
  float: left;
  width: 33%;
`;

const SpaceHolder = styled.h1`
  visibility: hidden;
`;

const StyledTitle = styled.div`
  padding-top: 1rem;
`;

const StyledText = styled.p`
  font-size: 1.5rem;
`;

const CompareModal = ({ showModal, setShowModal }) => {

  return (
    <Model onClick={() => setShowModal(!showModal)}>
      <InnerModel>
        <StyledTitle>
          <h1>Comparing</h1>
        </StyledTitle>
        <StyledColumn>
          <h1>Item1</h1>
          <StyledText>✔</StyledText>
          <StyledText>✘</StyledText>
          <StyledText>✔</StyledText>
          <StyledText>✔</StyledText>
          <StyledText>✘</StyledText>
        </StyledColumn>
        <StyledColumn>
          <SpaceHolder>nothing</SpaceHolder>
          <StyledText>Something1</StyledText>
          <StyledText>Something2</StyledText>
          <StyledText>Something3</StyledText>
          <StyledText>Someething4</StyledText>
          <StyledText>Something5</StyledText>
        </StyledColumn>
        <StyledColumn>
          <h1>Item2</h1>
          <StyledText>✘</StyledText>
          <StyledText>✔</StyledText>
          <StyledText>✔</StyledText>
          <StyledText>✘</StyledText>
          <StyledText>✔</StyledText>
        </StyledColumn>
      </InnerModel>
    </Model>
  );
};

export default CompareModal;
