import { getConterValue } from 'entities/Counter/model/selectors/getCounterValue/getConterValue';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounterValue.test', () => {
	test('', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 },
		};
		expect(getConterValue(state as StateSchema)).toEqual(10);
	});
});
