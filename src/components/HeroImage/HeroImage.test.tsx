import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  test('renders hero image with text', () => {
    render(<HeroImage backgroundImage="https://via.placeholder.com/800x300" text="Hero Image Test" />);
    const textElement = screen.getByText(/Hero Image Test/i);
    expect(textElement).toBeInTheDocument();
  });

  test('applies disabled styles when disabled', () => {
    render(<HeroImage backgroundImage="https://via.placeholder.com/800x300" text="Hero Image is Disabled" disabled />);
    const heroElement = screen.getByText(/Hero Image is Disabled/i).parentElement;
    expect(heroElement).toHaveStyle('filter: grayscale(100%)');
    expect(heroElement).toHaveStyle('opacity: 0.6');
    expect(heroElement).toHaveStyle('pointer-events: none');
  });
});
