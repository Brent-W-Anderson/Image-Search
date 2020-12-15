import React from 'react';
import '../../styles/image-list/image-list.css';

import ImageCard from './image-card';

const ImageList = props => {
  const images = props.images.map((image, index) => {
    return <ImageCard app={props.app} key={image.id} images={props.images} image={image} index={index} />;
  });

  return (
      <div className="image-list">{images}</div>
  );
}

export default ImageList;
