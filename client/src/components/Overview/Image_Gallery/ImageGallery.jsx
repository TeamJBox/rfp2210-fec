import React from 'react';
import styled from 'styled-components';
import DefaultImageView from './DefaultImageView.jsx';
import ExpandedImageView from './ExpandedImageView.jsx';

const AnotherImageGalleryDiv = styled.div`
  height: 100%;
`;

const ImageGallery = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, currentThumbnailUrl, setCurrentThumbnailUrl, currentPhotoUrl, setCurrentPhotoUrl, currentImageIndex, setCurrentImageIndex, expandedImageViewActive, setExpandedImageViewActive, ImageIsZoomed, setImageIsZoomed
  }) => {

    return (
      <AnotherImageGalleryDiv>
        <DefaultImageView
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
        />
        <ExpandedImageView
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
        />
      </AnotherImageGalleryDiv>

    );
  }
);

export default ImageGallery;

