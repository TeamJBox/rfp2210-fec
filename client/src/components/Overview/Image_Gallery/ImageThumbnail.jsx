import React from 'react';
import styled from 'styled-components';

const ImageThumbnailImg = styled.img`
height: 50px;
width: 50px;
z-index: 50;
position: relative;
border-radius: 20%
`;

const ImageThumbnail = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, thumbnailUrl, photoUrl, currentThumbnailUrl, setCurrentThumbnailUrl, currentPhotoUrl, setCurrentPhotoUrl, currentImageIndex, setCurrentImageIndex, photoIndex
  }) => {

    const handleThumbnailClick = (e) => {
      setCurrentThumbnailUrl(thumbnailUrl);
      setCurrentPhotoUrl(photoUrl);
      setCurrentImageIndex(photoIndex);
      e.preventDefault();
    };

    return (
      <ImageThumbnailImg src={thumbnailUrl} alt="select style" style={currentImageIndex === photoIndex ? { border: 'solid 5px', borderColor: 'teal' } : { borderColor: 'black' }} onClick={(e) => { handleThumbnailClick(e); }} />
    );
  });

export default ImageThumbnail;
