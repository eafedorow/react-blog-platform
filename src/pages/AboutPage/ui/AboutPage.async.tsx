import { lazy } from 'react';

export const AboutPageAsync = lazy(() => {
	// @ts-ignore
	return import('./AboutPage');
});
