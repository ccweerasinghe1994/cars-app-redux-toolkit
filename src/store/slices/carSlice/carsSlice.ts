import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { CARS_INITIAL_STATE } from './initialState.ts';
import { TCar } from './types.ts';

const carsSlice = createSlice({
	name: 'cars',
	initialState: CARS_INITIAL_STATE,
	reducers: {
		changeSearchTerm: (state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload;
		},
		addCar: (state, action: PayloadAction<TCar>) => {
			state.cars.push({ ...action.payload, id: nanoid() });
		},
		removeCar: (state, action: PayloadAction<string>) => {
			state.cars = state.cars.filter((car) => car.id !== action.payload);
		},
	},
});

export { carsSlice };
