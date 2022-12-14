import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ExpandedCurrentImage from './ExpandedCurrentImage.jsx';

const PhotoContainer = styled.div`
  display: flex;
  text-align: center;
  flex: 1;
  position: relative;
`;

const MagnifyingGlassIcon = styled.img`
height: 50px;
width: 50px;
`;

const ExpandedCurrentImages = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, currentThumbnailUrl, setCurrentThumbnailUrl, currentPhotoUrl, setCurrentPhotoUrl, currentImageIndex, setCurrentImageIndex, expandedImageViewActive, setExpandedImageViewActive, ImageIsZoomed, setImageIsZoomed
  }) => {
    let photoMap = [];
    const containerRef = useRef(null);



    const handlePhotoClick = (e) => {
      setExpandedImageViewActive(true);
      e.preventDefault();
    };

    if (productStylePhotos) {
      photoMap = (
        productStylePhotos.map((photo) => {
          return (
            <ExpandedCurrentImage
              photoUrl={photo.url}
              thumbnailUrl={photo.thumbnail_url}
              allProductStyles={allProductStyles}
              setAllProductStyles={setAllProductStyles}
              productStyleDefault={productStyleDefault}
              setProductStyleDefault={setProductStyleDefault}
              productStyleId={productStyleId}
              setProductStyleId={setProductStyleId}
              productStyleName={productStyleName}
              setProductStyleName={setProductStyleName}
              productStyleOriginalPrice={productStyleOriginalPrice}
              setProductStyleOriginalPrice={setProductStyleOriginalPrice}
              productStyleSalePrice={productStyleSalePrice}
              setProductStyleSalePrice={setProductStyleSalePrice}
              productStylePhotos={productStylePhotos}
              setProductStylePhotos={setProductStylePhotos}
              productStyleSku={productStyleSku}
              setProductStyleSku={setProductStyleSku}
              productStyleSkus={productStyleSkus}
              setProductStyleSkus={setProductStyleSkus}
              productStyleSize={productStyleSize}
              setProductStyleSize={setProductStyleSize}
              productStyleQuantity={productStyleQuantity}
              setProductStyleQuantity={setProductStyleQuantity}
              productStyleSizes={productStyleSizes}
              setProductStyleSizes={setProductStyleSizes}
              productStyleQuantities={productStyleQuantities}
              setProductStyleQuantities={setProductStyleQuantities}
              undefinedSizeSubmitted={undefinedSizeSubmitted}
              setUndefinedSizeSubmitted={setUndefinedSizeSubmitted}
              quantitySelectorIsDisabled={quantitySelectorIsDisabled}
              setQuantitySelectorIsDisabled={setQuantitySelectorIsDisabled}
              dropdownQuantitiesArray={dropdownQuantitiesArray}
              setDropdownQuantitiesArray={setDropdownQuantitiesArray}
              currentThumbnailUrl={currentThumbnailUrl}
              setCurrentThumbnailUrl={setCurrentThumbnailUrl}
              currentPhotoUrl={currentPhotoUrl}
              setCurrentPhotoUrl={setCurrentPhotoUrl}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
              expandedImageViewActive={expandedImageViewActive}
              setExpandedImageViewActive={setExpandedImageViewActive}
              ImageIsZoomed={ImageIsZoomed}
              setImageIsZoomed={setImageIsZoomed}
            />
          );
        })
      );
    }
    return (
      <PhotoContainer ref={containerRef} onClick={(e) => { handlePhotoClick(e); }}>
        {photoMap[currentImageIndex]}
      </PhotoContainer>
    );
  });

export default ExpandedCurrentImages;
