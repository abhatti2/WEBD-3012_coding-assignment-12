import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';
import TableRow from './TableRow';
import TableCell from './TableCell';

describe('Table Component', () => {
  test('renders the table component', () => {
    render(
      <Table>
        <tbody>
          <TableRow>
            <TableCell>Test Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    const cellElement = screen.getByText(/Test Cell/i);
    expect(cellElement).toBeInTheDocument();
  });
});
