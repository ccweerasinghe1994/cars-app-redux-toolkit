import { useAppSelector } from '../../store/index.ts';
import { useMemo } from 'react';

const CarValue = () => {
	const { cars, searchTerm } = useAppSelector((state) => state.car);

	const memorizedTotalCost = useMemo(() => {
		return cars
			.filter((car) =>
				car.name.toLowerCase().includes(searchTerm.toLowerCase()),
			)
			.reduce((acc, car) => acc + car.cost, 0);
	}, [cars, searchTerm]);
	return (
		<div className={'flex justify-end mt-10'}>
			Total Cost : $ {memorizedTotalCost}
		</div>
	);
};

export default CarValue;
