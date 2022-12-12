import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as styling from './Styling/Styling.js';
import CharSection from './CharSection.jsx';
import ReviewStarRating from './StarRating.jsx';
import PhotoUpload from './PhotoUpload.jsx';
import { getReviewsData } from './Utils.js';

const ReviewForm = ({ currentID, metaData, displayReviewForm, setDisplayReviewForm, setReviews, sortOrder }) => {

  const [reviewForm, setReviewForm] = useState({
    product_id: currentID,
    rating: 1,
    summary: '',
    body: '',
    recommend: null,
    name: '',
    email: '',
    photos: [],
    characteristics: {}
  });

  const [visible, setVisible] = useState(true);
  const [errors, setErrors] = useState(false);
  const [photoView, setPhotoView] = useState(false);

  const handleRecommend = (value) => {
    value === "true" ? setReviewForm({...reviewForm, recommend: true}) : setReviewForm({...reviewForm, recommend: false})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/reviews', reviewForm)
      .then(() => {
        return getReviewsData('/reviews', currentID, sortOrder, 1000);
      })
      .then((response) => {
        setReviews(response.data.results);
      })
      .catch((error) => console.log(error));
    setVisible(false);
  };

  const handleErrors = (event) => {
    event.preventDefault();
    if (reviewForm.recommend === null) {
      setErrors(true);
    } else if (Object.keys(metaData.characteristics).length !== Object.keys(reviewForm.characteristics).length) {
      setErrors(true);
    } else if (reviewForm.body.length < 50) {
      setErrors(true);
    } else if (reviewForm.name.length === 0) {
      setErrors(true);
    } else if (!reviewForm.email.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrors(true);
    } else {
      handleSubmit(event);
    }
  };





  return (
    <styling.ReviewFormContainer
      onClick={() => setVisible(false)}
      out={!visible}
      onAnimationEnd={() => !visible && setDisplayReviewForm(false)}
    >
      <styling.styledForm out={!visible} onClick={(event) => event.stopPropagation()}>
        <h2>Review Form</h2>
        {errors && <div>Please check your form</div>}
        <styling.recommendDiv>
          <label htmlFor="rating">
            Rating:
            <ReviewStarRating reviewForm={reviewForm} setReviewForm={setReviewForm} />
          </label>
          <span>I recommend this product: </span>
          <label htmlFor="recommend">
            Yes
            <input type="radio" id="yes" name="recommend" value="true" onChange={(event) => handleRecommend(event.target.value)} />
          </label>
          <label htmlFor="recommend">
            No
            <input type="radio" id="no" name="recommend" value="false" onChange={(event) => handleRecommend(event.target.value)} />
          </label>
        </styling.recommendDiv>
        <styling.CharsContainer>
          {Object.entries(metaData.characteristics).map((characteristic) => (
            <CharSection
              key={characteristic[1].id}
              characteristic={characteristic}
              reviewForm={reviewForm}
              setReviewForm={setReviewForm}
            />
          ))}
        </styling.CharsContainer>
        <styling.textAreaDiv>
          <styling.FormLabels htmlFor="summary">
            Summary:
            <textarea
              cols="48"
              id="summary"
              name="summary"
              maxLength="60"
              placeholder="Best Purchase Ever!"
              value={reviewForm.summary}
              onChange={(event) => setReviewForm({ ...reviewForm, summary: event.target.value })}
            />
          </styling.FormLabels>
          <styling.FormLabels htmlFor="body">
            Review:
            <textarea
              cols="48"
              rows="8"
              id="body"
              name="body"
              minLength="50"
              maxLength="1000"
              placeholder="Why did you like the product or not?"
              value={reviewForm.body}
              onChange={(event) => setReviewForm({ ...reviewForm, body: event.target.value })}
            />
          </styling.FormLabels>
          {reviewForm.body.length < 50 ? `Minimum Required Characters Left: ${50 - reviewForm.body.length}` : 'Minimum Reached'}
        </styling.textAreaDiv>
        <styling.UserInfoDiv>
          {photoView ? <PhotoUpload reviewForm={reviewForm} setReviewForm={setReviewForm} />
            : (
              <styling.photoButton
                type="button"
                onClick={(event) => setPhotoView(true)}
              >
                Upload Photos
              </styling.photoButton>
            )}
          <styling.FormLabels htmlFor="nicname">
            Nickname:
            <input
              type="text"
              id="nickname"
              name="nickname"
              placeholder="Example: jackson11!"
              value={reviewForm.name}
              onChange={(event) => setReviewForm({ ...reviewForm, name: event.target.value })}
            />
          </styling.FormLabels>
          <span>For privacy reasons, do not use your full name or email address</span>
          <styling.FormLabels htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Example: jackson11@email.com"
              value={reviewForm.email}
              onChange={(event) => setReviewForm({ ...reviewForm, email: event.target.value })}
            />
          </styling.FormLabels>
          <span>For authentication reasons, you will not be emailed</span>
        </styling.UserInfoDiv>
        <styling.submitButton type="submit" value="Submit Review" onClick={(event) => handleErrors(event)} />
      </styling.styledForm>
    </styling.ReviewFormContainer>
  );
};

export default ReviewForm;
