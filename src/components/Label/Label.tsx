import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label`
  font-size: 16px;
  color: #333;
`;

const Label: React.FC<LabelProps> = ({ text }) => <StyledLabel>{text}</StyledLabel>;

export default Label;
