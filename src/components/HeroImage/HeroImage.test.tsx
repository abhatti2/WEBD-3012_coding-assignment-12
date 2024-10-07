import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  test('renders hero image with text', () => {
    render(<HeroImage backgroundImage="https://via.placeholder.com/800x300" text="Hero Image Test" />);
    const textElement = screen.getByText(/Hero Image Test/i);
    expect(textElement).toBeInTheDocument();
  });
});
