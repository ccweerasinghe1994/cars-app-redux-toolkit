import CarForm from './Components/CarForm/CarForm.tsx';
import CarList from './Components/CarList/CarList.tsx';
import CarSearch from './Components/CarSearch/CarSearch.tsx';
import CarValue from './Components/CarValue/CarValue.tsx';

function App() {
	console.log('App');
	return (
		<div className={'w-3/4 mx-auto'}>
			<CarForm />
			<CarSearch />
			<CarList />
			<CarValue />
		</div>
	);
}

export default App;
