import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Hello'
	}
};
export const PrimaryDark: Story = {
	args: {
		children: 'Hello'
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};
export const Clear: Story = {
	args: {
		children: 'Hello',
		theme: ThemeButton.CLEAR
	}
};

export const ClearDark: Story = {
	args: {
		children: 'Hello',
		theme: ThemeButton.CLEAR
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};

export const Outline: Story = {
	args: {
		children: 'Outline',
		theme: ThemeButton.OUTLINE
	}
};

export const OutlineDark: Story = {
	args: {
		children: 'Outline',
		theme: ThemeButton.OUTLINE
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};

