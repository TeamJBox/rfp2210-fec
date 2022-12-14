import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CompareModal from './CompareModal.jsx';
import StaticStars from '../RatingsReviews/StaticStars.jsx';


const Ratings = styled.div`
  position: relative;
  vertical-align: middle;
  display: inline-block;
  color: #fafafa;
  overflow: hidden;
  width: fit-content;
  min-width: fit-content;
`;

const EmptyStars = styled.div`
  &:before {
    content: "★★★★★";
    font-size: ${props => props.size}pt;
    -webkit-text-stroke: 1px #848484;
  }
`;

const FullStars = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
  color: black;
  &:before {
    content: "★★★★★";
    font-size: ${props => props.size}pt;
    -webkit-text-stroke: 1px black;
  }
  width: ${props => props.percentage}%;
`;


const StyledCard = styled.div`
  box-shadow: 0 1px 0.5rem -4px #000;
  background: #fff;
  cursor: pointer;
  height: 375px;
  position: relative;
  margin-bottom: 1rem;
`;

const StyledName = styled.h3`
  margin: 0.5rem 0;
  padding: 0;
`;

const StyledPrice = styled.p`
  padding: 0;
  margin: 0;
`;

const StyledCategory = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0;
  color: #A9A9A9;
`;

const StyledStar = styled.img`
  height: 25px;
  width: 25px;
  top: 0.5rem;
  right: 0.5rem;
  position: absolute;
`;

const Image = styled.img`
    height: 60%;
    width: ${props => props.width}px;
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const RelatedCard = ({ id, currentID, setCurrentID, name, category, default_price, picture, type, outfitItems, setOutfitItems, cardWidth, ratings }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setCurrentID(id);
    window.scrollTo({ top: 0 });
  };

  return (
    <Container>
      {showModal && <CompareModal id={id} currentID={currentID} setShowModal={setShowModal} /> }
      <StyledCard>
        <StyledStar onClick={() => setShowModal(true)} alt="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyPxB9kLfrOIiFkuFWThAIBmwSh8FPvOlgA&usqp=CAU" />
        <Image width={cardWidth} src={picture} alt="item" onClick={handleClick} />
        <StyledCategory>{category}</StyledCategory>
        <StyledName>{name}</StyledName>
        <StyledPrice>{default_price}</StyledPrice>
        <StaticStars rating={ratings} size={12} />
      </StyledCard>
    </Container>
  );
};


export default RelatedCard;
