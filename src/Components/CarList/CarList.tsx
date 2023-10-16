import {
	removeCar,
	useAppDispatch,
	useAppSelector,
} from '../../store/index.ts';
import { useMemo } from 'react';

const CarList = () => {
	const {
		form: { name },
		car: { searchTerm, cars },
	} = useAppSelector((state) => state);

	const carMemorized = useMemo(() => {
		return cars.filter((car) =>
			car.name.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	}, [cars, searchTerm]);
	const dispatch = useAppDispatch();

	const handleDelete = (id: string) => {
		dispatch(removeCar(id));
	};

	const renderCars = carMemorized.map((car) => {
		const highlight =
			name && car.name.toLowerCase().includes(name.toLowerCase());
		console.log('car.name.toLowerCase()', car.name.toLowerCase());
		console.log('name.toLowerCase()', name.toLowerCase());
		console.log(highlight);
		return (
			<div key={car.id} className={'flex justify-between mb-10 text-2xl'}>
				<p>
					<span className={highlight ? 'bg-amber-200' : ''}>{car.name}</span> -
					${car.cost}
				</p>
				<button
					className={
						'bg-red-300 font-medium ml-5 px-2 py-1 rounded text-red-9 text-slate-600'
					}
					onClick={() => handleDelete(car?.id ?? '')}>
					delete
				</button>
			</div>
		);
	});
	return (
		<div>
			{renderCars}
			<hr />
		</div>
	);
};

export default CarList;
