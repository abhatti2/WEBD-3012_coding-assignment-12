import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.div<{ background: string; disabled?: boolean }>`
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
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

const HeroImage: React.FC<HeroImageProps> = ({ backgroundImage, text, disabled = false }) => (
  <StyledHeroImage background={backgroundImage} disabled={disabled}>
    {text}
  </StyledHeroImage>
);

export default HeroImage;
