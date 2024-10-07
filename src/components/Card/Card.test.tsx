import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('renders card with title and body', () => {
    render(<Card title="Test Title" body="Test Body" />);
    const titleElement = screen.getByText(/Test Title/i);
    const bodyElement = screen.getByText(/Test Body/i);
    expect(titleElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
  });
});
