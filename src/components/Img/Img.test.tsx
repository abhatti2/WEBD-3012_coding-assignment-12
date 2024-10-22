import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img Component', () => {
  test('renders the image component with alt text', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Test Image" />);
    const imgElement = screen.getByAltText(/Test Image/i);
    expect(imgElement).toBeInTheDocument();
  });

  test('applies disabled styles when disabled', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Disabled Image" disabled />);
    const imgElement = screen.getByAltText(/Disabled Image/i);
    expect(imgElement).toHaveStyle('filter: grayscale(100%)');
    expect(imgElement).toHaveStyle('opacity: 0.5');
    expect(imgElement).toHaveStyle('pointer-events: none');
  });
});
