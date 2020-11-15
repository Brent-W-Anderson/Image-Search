import React from 'react';
import '../../styles/image-list/image-list.css';

import ImageCard from './image-card';

const ImageList = props => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
      <div className="image-list">{images}</div>
  );
}

export default ImageList;
