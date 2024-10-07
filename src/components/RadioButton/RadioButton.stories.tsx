import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    name: { control: 'text' },
    checked: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);
  return (
    <RadioButton
      {...args}
      checked={selectedValue === args.value}
      onChange={(val) => setSelectedValue(val)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
  value: 'option1',
  name: 'exampleGroup',
  checked: false,
};
