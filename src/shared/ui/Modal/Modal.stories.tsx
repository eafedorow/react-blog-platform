import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
	title: 'shared/Modal',
	component: Modal,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
	args: {
		isOpen: true,
		children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
            '\t\t\t\tAlias culpa dignissimos doloribus in, molestias optio! Dolore minus\n' +
            '\t\t\t\tnihil officiis rerum sed. At earum, eius in natus odio' +
            ' placeat quam repellendus.'
	}
};
export const PrimaryDark: Story = {
	args: {
		isOpen: true,
		children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
            '\t\t\t\tAlias culpa dignissimos doloribus in, molestias optio! Dolore minus\n' +
            '\t\t\t\tnihil officiis rerum sed. At earum, eius in natus odio' +
            ' placeat quam repellendus.'
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		)
	]
};
