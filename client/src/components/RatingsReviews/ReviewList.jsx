import React, { useState, useEffect, useRef } from 'react';
import * as styling from './Styling/Styling.js';
import ReviewTile from './ReviewTile.jsx';
import ReviewForm from './ReviewForm.jsx';

const ReviewList = ({ currentID, reviews, metaData, setReviews, sortOrder, displayReviewForm, setDisplayReviewForm, searchText }) => {


  const [displayedReviews, setDisplayedReviews] = useState(2);
  const [helpfulReviews, setHelpfulReviews] = useState([]);
  const divRef = useRef();


  const handleMoreReviews = () => {
    setDisplayedReviews(displayedReviews + 2);
    setTimeout(() => {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 30);
  };

  useEffect(() => {
    setHelpfulReviews(JSON.parse(localStorage.getItem('helpful')));
  }, []);

  useEffect(() => {
    setDisplayedReviews(2);
  }, [currentID]);

  return (
    <styling.ReviewListDiv>
      <styling.ReviewTilesContainer>
        {reviews.length > 0 ? reviews.slice(0, displayedReviews).map((review) => (
          <ReviewTile
            key={review.review_id}
            currentID={currentID}
            review={review}
            setReviews={setReviews}
            sortOrder={sortOrder}
            helpfulReviews={helpfulReviews}
            setHelpfulReviews={setHelpfulReviews}
            searchText={searchText}
          />
        )) : <styling.SearchResultsDiv>No Reviews Matched Your Search</styling.SearchResultsDiv>}
      </styling.ReviewTilesContainer>
      <div ref={divRef}></div>
      <styling.ReviewButtonContainer shrink={displayedReviews > 2}>
        {reviews.length > displayedReviews ? <styling.Buttons type="button" onClick={() => handleMoreReviews()}>More Reviews</styling.Buttons> : null}
        <styling.Buttons type="button" onClick={() => displayReviewForm ? setDisplayReviewForm(false) : setDisplayReviewForm(true)}>Add Review</styling.Buttons>
      </styling.ReviewButtonContainer>
      {displayReviewForm
        ? (
          <ReviewForm
            currentID={currentID}
            metaData={metaData}
            displayReviewForm={displayReviewForm}
            setDisplayReviewForm={setDisplayReviewForm}
            setReviews={setReviews}
            sortOrder={sortOrder}
          />
        )
        : null}
    </styling.ReviewListDiv>
  );
};

export default ReviewList;
