import React from 'react';

import { IMAGE_SRC } from './ImageSrc';

export const HeroImage: React.FC = () => {
  return (
    <div style={{ aspectRatio: '16 / 9', width: '100%' }}>
      <img style={{ display: 'inline-block', width: '100%' }} src={IMAGE_SRC} alt="Cyber TOON" />
    </div>
  );
};
