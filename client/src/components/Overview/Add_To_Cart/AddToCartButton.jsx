import React from 'react';
import styled from 'styled-components';

const ATCButton = styled.button`
  border-radius: 0.25rem;
  padding: 1rem;
  cursor: pointer;
  border: 0.0625rem solid;
  border-color: black;
  background-color: black;
  color: white;
  overflow-wrap: break-word;
  min-width: fit-content;
  height: 50px;
  width: 250px;
`;

const AddToCartButton = (
  ({
    productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, addToCartButtonIsVisible, setAddToCartButtonIsVisible, addToCartButtonIsDisabled, setAddToCartButtonIsDisabled, allQuantitiesZero, setAllQuantitiesZero, productStyleSizeDropdownLength, setProductStyleSizeDropdownLength
  }) => {

    // console.log(addToCartButtonIsVisible);
    return (
      <ATCButton type="submit" style={!allQuantitiesZero ? { visibility: 'visible' } : { visibility: 'hidden' }}>Add to Cart</ATCButton>
    );
  });

export default AddToCartButton;
