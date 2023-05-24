import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
	title: 'shared/Text',
	component: Text,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
	args: {
		title: 'Example title',
		text: 'Example text'
	}
};

export const OnlyTitle: Story = {
	args: {
		title: 'Only title',
	}
};

export const OnlyText: Story = {
	args: {
		text: 'Only text.'
	}
};


export const DefaultDark: Story = {
	args: {
		title: 'Example title',
		text: 'Example text'
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};

export const OnlyTitleDark: Story = {
	args: {
		title: 'Only title',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};

export const OnlyTextDark: Story = {
	args: {
		text: 'Only text.'
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};

export const Error: Story = {
	args: {
		title: 'Example error title',
		text: 'Example error text',
		theme: TextTheme.ERROR
	}
};
