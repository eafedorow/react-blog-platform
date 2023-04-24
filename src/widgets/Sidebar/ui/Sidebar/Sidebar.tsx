import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, { useState } from 'react';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/Home.svg';
import NoteIcon from 'shared/assets/icons/NoteIcon.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const { t } = useTranslation();

	const onToggle = () => {
		setIsCollapsed(prev => !prev);
	};

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}
		>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapseBtn}
				theme={ThemeButton.BACKGROUND_INVERTED}
				size={ButtonSize.L}
				square
			>
				{isCollapsed ? '>' : '<'}
			</Button>
			<div className={cls.nav}>

				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
					className={cls.navItem}
				>
					<HomeIcon className={cls.navIcon}/>
					<span className={cls.navLink}>
						{t('Главная')}
					</span>
				</AppLink>

				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.about}
					className={cls.navItem}
				>
					<NoteIcon className={cls.navIcon}/>
					<span className={cls.navLink}>
						{t('О сайте')}
					</span>
				</AppLink>
			</div>

			<div className={cls.switchers}>
				<ThemeSwitcher className={cls.SidebarThemeSwitcher}/>
				<LangSwitcher className={cls.SidebarLangSwitcher} isShort={isCollapsed}/>
			</div>
		</div>
	);
};
