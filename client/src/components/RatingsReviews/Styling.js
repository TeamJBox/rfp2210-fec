import styled, { keyframes } from 'styled-components';

// Main container
export const Buttons = styled.button`
  border-radius: 0.25rem;
  border: 0.0625 rem solid;
  padding: 0.5rem;
  cursor: pointer;
`;

export const ReviewSectionContainer = styled.div`
  margin-top: 150px;
  border-top: solid 1px grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 150px;
`;

export const ReviewSectionHeader = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const ReviewSectionBody = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

// Hover Stars
export const StarButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14pt;
  color: ${props => props.clicked ? 'black' : '#fafafa'}
`;
export const StarButtonInside = styled.div`
  -webkit-text-stroke: 1px #848484;
`;


// Static Stars
export const Ratings = styled.div`
  position: relative;
  vertical-align: middle;
  display: inline-block;
  color: #fafafa;
  overflow: hidden;
  width: fit-content;
  min-width: fit-content;
`;

export const EmptyStars = styled.div`
  &:before {
    content: "★★★★★";
    font-size: ${props => props.size}pt;
    -webkit-text-stroke: 1px #848484;
  }
`;

export const FullStars = styled.div`
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

// Review List Styles

export const ReviewListDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ReviewTilesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Rating Breakdown Styles

export const RatingBreakdownDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

export const AverageRatingDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;


// Filters Styles
export const FiltersDiv = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BarGraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap 10px;
`;

export const ResetFiltersButton = styled(Buttons)`
  width: fit-content;
`;


// BarGraph Styles

export const BarGraphDiv = styled.div`
  display: flex;
  width: fit-content;
  gap: 1rem;
  cursor: pointer;
`;

export const Meter = styled.div`
  width: 150px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid grey;
  overflow: hidden;
  position: relative;
  background-color: #fafafa;
`;

export const Progress = styled.span`
  height: 100%;
  display: block;
  width: ${props => props.percentage}%;
  background-color: black;
  line-height: 30px;
  position: absolute;
  text-align: end;
  padding-right: 5px;
`;

// ReviewTile Styles

export const ReviewTileDiv = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  box-shadow: 0.0625rem 0.125rem #e8e7e4;
  background-color: #fafafa;
`;

export const ReviewTileContent = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ReviewTileHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReviewPhotos = styled.div`
  display: flex;
  gap: 1rem;
  width: 50%;
`;

export const TileButtons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ReportButton = styled(Buttons)`
  background-color: transparent;
  border: none;
  height: fit-content;
  width: fit-content;
  padding: 0;
  margin: 0;
`;

// Review Form Styles

const fadeInAnimation = keyframes`
0% { opacity: 0}
100% { opacity: 1}
`;

const fadeOutAnimation = keyframes`
  0% { opacity: 1}
  100% { opacity: 0}
`;

const expandAnimation = keyframes`
0% {transform: scale(0)}
100% {transform: scale(1)}
`;

const collapseAnimation = keyframes`
0% {transform: scale(1)}
100% {transform: scale(0)}
`;

export const ReviewFormContainer = styled.div`
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation-name: ${props => props.out ? fadeOutAnimation : fadeInAnimation};
  animation-duration: 0.3s;
`;

export const styledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 500px;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 20px;
  animation-name: ${props => props.out ? collapseAnimation : expandAnimation};
  animation-duration: 0.3s;
`;

export const recommendDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const characteristicsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CharNames = styled.span`
  margin-bottom: 10px;
`;

export const characteristicsButtons = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

export const characteristicsDescriptions = styled.span`
  width: 450px;
  display: flex;
  justify-content: space-between;
`;

export const FormLabels = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 5px;
`;

export const textAreaDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const UserInfoDiv = styled.div`
  align-self: flex-start;
`;

export const photoButton = styled.button`
  width: fit-content;
  margin-top: 10px;
  margin-bottom: 10px;
`;


export const submitButton = styled.input`
  margin-top: 10px;
  width: fit-content;
`;
