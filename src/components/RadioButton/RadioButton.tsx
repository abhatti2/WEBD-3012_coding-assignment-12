import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.input`
  margin-right: 8px;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  color: #333;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, name, checked, onChange }) => (
  <div>
    <StyledRadioButton
      type="radio"
      value={value}
      name={name}
      checked={checked}
      onChange={(e) => onChange(e.target.value)}
    />
    <StyledLabel>{label}</StyledLabel>
  </div>
);

export default RadioButton;
