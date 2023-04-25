import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
					'value' | 'onChange' | 'type' | 'placeholder'>
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    type?: string;
	placeholder?: string
	isAutofocus?: boolean;
    onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		isAutofocus,
		...otherProps
	} = props;

	const ref = useRef<HTMLInputElement>();
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		if(isAutofocus) {
			setIsFocused(true);
			ref.current?.focus();
		}
	}, [isAutofocus]);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	const onBlur = () => {
		setIsFocused(false);
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	return (
		<div className={classNames(cls.InputWrapper, {}, [className])}>
			{placeholder && (
				<span
					className={classNames(
						cls.placeholder,
						{},
						[isFocused || value ? cls.focusedPlaceholder : ''])
					}
				>
					{placeholder}
				</span>
			)}

			<input
				ref={ref}
				type={type}
				value={value}
				onChange={onChangeHandler}
				className={cls.input}
				onFocus={onFocus}
				onBlur={onBlur}
				{...otherProps}
			/>
		</div>
	);
};
