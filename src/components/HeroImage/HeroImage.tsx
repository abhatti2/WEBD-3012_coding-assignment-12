import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.div<{ background: string }>`
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  border-radius: 8px;
`;

const HeroImage: React.FC<HeroImageProps> = ({ backgroundImage, text }) => (
  <StyledHeroImage background={backgroundImage}>
    {text}
  </StyledHeroImage>
);

export default HeroImage;
