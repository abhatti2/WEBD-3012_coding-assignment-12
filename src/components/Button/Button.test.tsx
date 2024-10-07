import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders the button component', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies disabled styles when disabled', () => {
    render(<Button label="Disabled Button" disabled />);
    const buttonElement = screen.getByText(/Disabled Button/i);
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
  });
});
