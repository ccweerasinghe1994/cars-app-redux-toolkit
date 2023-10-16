import { ChangeEvent, FormEvent } from 'react';
import {
	changeName,
	useAppDispatch,
	useAppSelector,
	changeCost,
	addCar,
} from '../../store/index.ts';
import { TCar } from '../../store/slices/carSlice/types.ts';

const CarForm = () => {
	const name = useAppSelector((state) => state.form.name);
	const cost = useAppSelector((state) => state.form.cost);
	const dispatch = useAppDispatch();
	// tailwind styled form with name and price and submit button

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.name === 'price') {
			const input = Number(event.target.value) || 0;
			dispatch(changeCost(input));
		}
		if (event.target.name === 'name') {
			dispatch(changeName(event.target.value));
		}
	};
	console.log('CarForm');

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('handleSubmit');
		const data: TCar = { name, cost };
		dispatch(addCar(data));
	};

	return (
		<form onSubmit={handleSubmit} className="my-10 font-semibold text-2xl">
			<label className={'mr-2'} htmlFor="name">
				Name
			</label>
			<input
				value={name}
				className={'border-2 mr-5 rounded-xl'}
				type="text"
				id="name"
				name="name"
				onChange={handleChange}
				placeholder={'car name '}
			/>
			<label className={'mr-2'} htmlFor="price">
				Price
			</label>
			<input
				value={cost || ''}
				onChange={handleChange}
				className={'border-2 rounded-xl'}
				type="number"
				id="price"
				name="price"
				placeholder={'enter a car price'}
			/>
			<button
				type="submit"
				className={
					'ml-10 border-red-200 border-2 bg-red-100 mt-11 py-1 font-bold px-2 rounded-2xl'
				}>
				SUBMIT
			</button>
		</form>
	);
};

export default CarForm;
