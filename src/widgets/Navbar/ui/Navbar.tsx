import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev);
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ThemeButton.CLEAR}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t('Войти')}
			</Button>
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Alias culpa dignissimos doloribus in, molestias optio! Dolore minus
				nihil officiis rerum sed. At earum, eius in natus odio placeat quam repellendus.
			</Modal>
		</div>
	);
};
