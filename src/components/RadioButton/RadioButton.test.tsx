import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  test('renders radio button with label', () => {
    render(<RadioButton label="Test Radio" value="test" name="group1" checked={false} onChange={() => {}} />);
    const labelElement = screen.getByText(/Test Radio/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('triggers onChange when selected', () => {
    const onChangeMock = jest.fn();
    render(<RadioButton label="Test Radio" value="test" name="group1" checked={false} onChange={onChangeMock} />);
    fireEvent.click(screen.getByLabelText(/Test Radio/i));
    expect(onChangeMock).toHaveBeenCalledWith('test');
  });

  test('does not allow interaction when disabled', () => {
    const onChangeMock = jest.fn();
    render(<RadioButton label="Disabled Radio" value="disabled" name="group1" checked={false} onChange={onChangeMock} disabled />);
    const radioButtonElement = screen.getByLabelText(/Disabled Radio/i);
    expect(radioButtonElement).toBeDisabled();
    fireEvent.click(radioButtonElement);
    expect(onChangeMock).not.toHaveBeenCalled();
  });
});
