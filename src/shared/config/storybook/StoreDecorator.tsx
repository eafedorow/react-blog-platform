import { FC, ReactNode } from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

interface StoreDecoratorProps {
    state: StateSchema
    children: ReactNode;
}

export const StoreDecorator: FC<StoreDecoratorProps> = ({ state, children })  => {
	return (
		<StoreProvider initialState={state}>
			{ children }
		</StoreProvider>
	);
};
