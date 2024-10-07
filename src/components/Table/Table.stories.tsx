import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Table from './Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: StoryFn = () => (
  <Table>
    <thead>
      <TableRow>
        <TableHeader>Name</TableHeader>
        <TableHeader>Age</TableHeader>
      </TableRow>
    </thead>
    <tbody>
      <TableRow>
        <TableCell>John Doe</TableCell>
        <TableCell>28</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jane Smith</TableCell>
        <TableCell>34</TableCell>
      </TableRow>
    </tbody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={2}>Footer Information</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Default = Template.bind({});