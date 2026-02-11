import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableFooter } from './TableFooter';
import { TableProps } from './Table.types';

const meta: Meta<TableProps> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<TableProps>;

const SampleTable = (args: TableProps) => (
  <Table disabled={args.disabled}>
    <TableHeader disabled={args.disabled}>
      <TableRow disabled={args.disabled}>
        <TableCell disabled={args.disabled}>Header 1</TableCell>
        <TableCell disabled={args.disabled}>Header 2</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow disabled={args.disabled}>
        <TableCell disabled={args.disabled}>Row 1, Cell 1</TableCell>
        <TableCell disabled={args.disabled}>Row 1, Cell 2</TableCell>
      </TableRow>
    </tbody>
    <TableFooter disabled={args.disabled}>
      <TableRow disabled={args.disabled}>
        <TableCell disabled={args.disabled}>Footer 1</TableCell>
        <TableCell disabled={args.disabled}>Footer 2</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Default: Story = {
  args: {
    disabled: false,
    children: null
  },
  render: (args) => <SampleTable {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <SampleTable {...args} />,
};

