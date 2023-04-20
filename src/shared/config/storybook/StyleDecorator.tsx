import { FC, ReactNode } from 'react';
import 'app/styles/index.scss';

export  interface StyleDecoratorProps {
    children: ReactNode
}

export const StyleDecorator: FC<StyleDecoratorProps> = ({ children }) => (
	<>
		{ children }
	</>
);
