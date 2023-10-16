import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FORM_INITIAL_STATE } from './initialState.ts';
import { addCar } from '../../index.ts';

const formSlice = createSlice({
	name: 'form',
	initialState: FORM_INITIAL_STATE,
	reducers: {
		changeName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		changeCost: (state, action: PayloadAction<number>) => {
			state.cost = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(addCar, (state) => {
			state.name = '';
			state.cost = 0;
		});
	},
});

export { formSlice };
