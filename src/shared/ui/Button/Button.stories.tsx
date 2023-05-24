import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ThemeButton } from './Button';
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

export const OutlineSizeL: Story = {
	args: {
		children: 'Outline',
		theme: ThemeButton.OUTLINE,
		size: ButtonSize.L
	}
};

export const OutlineSizeXL: Story = {
	args: {
		children: 'Outline',
		theme: ThemeButton.OUTLINE,
		size: ButtonSize.XL
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

export const Background: Story = {
	args: {
		children: 'Background',
		theme: ThemeButton.BACKGROUND
	}
};

export const BackgroundDark: Story = {
	args: {
		children: 'Background',
		theme: ThemeButton.BACKGROUND
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};

export const BackgroundInverted: Story = {
	args: {
		children: 'Background inverted',
		theme: ThemeButton.BACKGROUND_INVERTED
	}
};

export const BackgroundInvertedDark: Story = {
	args: {
		children: 'Background inverted',
		theme: ThemeButton.BACKGROUND_INVERTED
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};

export const SquareM: Story = {
	args: {
		children: '>',
		theme: ThemeButton.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.M
	}
};

export const SquareDarkM: Story = {
	args: {
		children: '>',
		theme: ThemeButton.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.M
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};

export const SquareL: Story = {
	args: {
		children: '>',
		theme: ThemeButton.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.L
	}
};

export const SquareDarkL: Story = {
	args: {
		children: '>',
		theme: ThemeButton.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.L
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};
export const SquareXL: Story = {
	args: {
		children: '>',
		theme: ThemeButton.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.XL
	}
};

export const SquareDarkXL: Story = {
	args: {
		children: '>',
		theme: ThemeButton.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.XL
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};

export const Disabled: Story = {
	args: {
		children: '>',
		theme: ThemeButton.OUTLINE,
		disabled: true
	}
};
