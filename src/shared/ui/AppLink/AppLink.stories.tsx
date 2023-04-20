import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
	tags: ['autodocs'],
	args: {
		to: '/'
	}
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
	args: {
		theme: AppLinkTheme.PRIMARY,
		children: 'Example link',
	}
};
export const PrimaryDark: Story = {
	args: {
		theme: AppLinkTheme.PRIMARY,
		children: 'Example link',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};

export const Secondary: Story = {
	args: {
		theme: AppLinkTheme.SECONDARY,
		children: 'Example link',
	}
};
export const SecondaryDark: Story = {
	args: {
		theme: AppLinkTheme.SECONDARY,
		children: 'Example link',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};

export const Red: Story = {
	args: {
		theme: AppLinkTheme.RED,
		children: 'Example link',
	}
};
export const RedDark: Story = {
	args: {
		theme: AppLinkTheme.RED,
		children: 'Example link',
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};
