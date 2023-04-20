import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ErrorOnPage } from './ErrorOnPage';

const meta: Meta<typeof ErrorOnPage> = {
	title: 'widgets/ErrorOnPage',
	component: ErrorOnPage,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorOnPage>;

export const Light: Story = {
	args: {
	}
};
export const Dark: Story = {
	args: {
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};
