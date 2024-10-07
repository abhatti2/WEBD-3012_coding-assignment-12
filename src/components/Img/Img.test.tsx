import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img Component', () => {
  test('renders the image component with alt text', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Test Image" />);
    const imgElement = screen.getByAltText(/Test Image/i);
    expect(imgElement).toBeInTheDocument();
  });
});
