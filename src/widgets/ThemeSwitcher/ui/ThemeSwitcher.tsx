import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import ThemesIcon from 'shared/assets/icons/ThemesIcon.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { toggleTheme } = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames('', {}, [className])}
			onClick={toggleTheme}
		>
			<ThemesIcon className={classNames(cls.theme, {}, [className])} />
		</Button>
	);
};
