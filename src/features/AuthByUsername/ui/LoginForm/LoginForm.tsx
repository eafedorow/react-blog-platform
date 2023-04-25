import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const onChangeUsername = (val: string) => {
		setUsername(val);
	};

	const onChangePassword = (val: string) => {
		setPassword(val);
	};

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Input
				type='text'
				className={cls.input}
				placeholder={t('Введите username')}
				value={username}
				onChange={onChangeUsername}
				isAutofocus
			/>
			<Input
				type='text'
				className={cls.input}
				placeholder={t('Введите пароль')}
				value={password}
				onChange={onChangePassword}
			/>
			<Button className={cls.loginBtn}>
				{t('Войти')}
			</Button>
		</div>
	);
};
