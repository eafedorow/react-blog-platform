import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { FC, ReactNode } from 'react';

interface ThemeDecoratorProps {
	theme: Theme;
	children: ReactNode;
}

export const ThemeDecorator: FC<ThemeDecoratorProps> = ({ theme, children })  => {
	return (
		<ThemeProvider initialTheme={theme}>
			<div className={`app ${theme}`}>
				{ children }
			</div>
		</ThemeProvider>
	);
};
