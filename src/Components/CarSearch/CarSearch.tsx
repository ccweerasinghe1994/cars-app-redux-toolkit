import { ChangeEvent } from 'react';
import {
	changeSearchTerm,
	useAppDispatch,
	useAppSelector,
} from '../../store/index.ts';

const CarSearch = () => {
	const searchText = useAppSelector((state) => state.car.searchTerm);
	const dispatch = useAppDispatch();
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(changeSearchTerm(event.target.value));
	};
	return (
		<div className={'mb-5'}>
			<h3>My Cars</h3>
			<div className={'flex justify-end'}>
				<label className={'mr-2'} htmlFor="search">
					search
				</label>
				<input
					value={searchText}
					onChange={handleChange}
					className={'border-2'}
					type="text"
					id="search"
					name="search"
				/>
			</div>
		</div>
	);
};

export default CarSearch;
