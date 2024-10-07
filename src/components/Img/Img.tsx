import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: cover;
  border-radius: 8px;
`;

const Img: React.FC<ImgProps> = ({ src, alt, width = '100%', height = 'auto' }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} />;
};

export default Img;
