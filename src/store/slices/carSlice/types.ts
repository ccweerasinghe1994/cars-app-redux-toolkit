export type TCar = {
	id?: string;
	name: string;
	cost: number;
};

export type TCarSliceState = {
	cars: TCar[];
	searchTerm: string;
};
