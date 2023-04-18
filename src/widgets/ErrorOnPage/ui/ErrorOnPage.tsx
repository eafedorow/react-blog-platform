import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ErrorOnPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface ErrorOnPageProps {
    className?: string;
}

export const ErrorOnPage = ({ className }: ErrorOnPageProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<div className={classNames(cls.ErrorOnPage, {}, [className])}>
			<p>{t('Произошла непредвиденная ошибка')}</p>
			<Button onClick={reloadPage}>
				{t('Обновить страницу')}
			</Button>
		</div>
	);
};
