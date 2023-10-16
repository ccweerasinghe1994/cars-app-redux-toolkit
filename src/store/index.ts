import { configureStore } from '@reduxjs/toolkit';
import { formSlice } from './slices/formSlice/formSlice.ts';
import { carsSlice } from './slices/carSlice/carsSlice.ts';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';

const { changeName, changeCost } = formSlice.actions;
const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;
const store = configureStore({
	reducer: {
		form: formSlice.reducer,
		car: carsSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { store };
export { changeName, changeCost };
export { addCar, removeCar, changeSearchTerm };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
