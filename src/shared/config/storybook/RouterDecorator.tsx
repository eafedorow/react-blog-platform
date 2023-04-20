import { FC, ReactNode } from 'react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export  interface RouterDecoratorProps {
    children: ReactNode
}

export const RouterDecorator: FC<RouterDecoratorProps> = ({ children }) => (
	<BrowserRouter>
		{ children }
	</BrowserRouter>
);
