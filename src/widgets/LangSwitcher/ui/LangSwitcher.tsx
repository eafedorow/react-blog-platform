import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import TranslateIcon from 'shared/assets/icons/TranslateIcon.svg';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
	isShort?: boolean;
}

export const LangSwitcher = ({ className, isShort }: LangSwitcherProps) => {

	const { t, i18n } = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			className={classNames('', {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggle}
		>
			<TranslateIcon className={classNames(cls.LangIcon, {}, [])} />
			<span>
				{t(isShort ? 'Короткое обозначение языка' : 'Язык')}
			</span>
		</Button>
	);
};
