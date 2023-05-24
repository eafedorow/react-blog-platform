import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { username, password, isLoading, error } = useSelector(getLoginState);

	const onChangeUsername = useCallback((val: string) => {
		dispatch(loginActions.setUsername(val));
	}, [dispatch]);

	const onChangePassword = useCallback((val: string) => {
		dispatch(loginActions.setPassword(val));
	}, [dispatch]);

	const onSubmit = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Text title={t('Форма авторизации')}/>
			{error && <Text text={error} theme={TextTheme.ERROR}/>}
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
			<Button
				className={cls.loginBtn}
				theme={ThemeButton.OUTLINE}
				onClick={onSubmit}
				disabled={isLoading}
			>
				{t('Войти')}
			</Button>
		</div>
	);
});
