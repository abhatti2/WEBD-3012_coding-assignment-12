import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ width: string; height: string; disabled?: boolean }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: cover;
  border-radius: 8px;
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

const Img: React.FC<ImgProps> = ({ src, alt, width = '100%', height = 'auto', disabled = false }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />;
};

export default Img;
