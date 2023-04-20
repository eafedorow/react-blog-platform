import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import React from 'react';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story) => (
			<StyleDecorator>
				<Story />
			</StyleDecorator>
		),
		(Story) => (
			<ThemeDecorator theme={Theme.DEFAULT}>
				<Story />
			</ThemeDecorator>
		),
		(Story) => (
			<RouterDecorator>
				<Story />
			</RouterDecorator>
		)
	]
};
export default preview;
