import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <div className = 'text-align-center flex-row justify-content-center'>
      <p>
        {currentCategory.description}</p>
        </div>
      <PhotoList category={currentCategory.name} />
      
    </section>
  );
}
export default Gallery;
