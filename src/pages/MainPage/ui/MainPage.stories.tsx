import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
	title: 'pages/MainPage',
	component: MainPage,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

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
