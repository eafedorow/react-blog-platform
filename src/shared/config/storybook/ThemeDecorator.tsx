import { Theme } from 'app/providers/ThemeProvider';
import { FC, ReactNode } from 'react';

interface ThemeDecoratorProps {
	theme: Theme;
	children: ReactNode;
}

export const ThemeDecorator: FC<ThemeDecoratorProps> = ({ theme, children })  => {
	return (
		<div className={`app ${theme}`}>
			{ children }
		</div>
	);
};
