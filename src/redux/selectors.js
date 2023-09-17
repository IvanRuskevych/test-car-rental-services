export const selectCars = (state) => state.cars.items;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectIsCarsExist = (state) => Boolean(state.cars.items.length);
export const selectFavouriteCars = (state) => state.cars.favourite;
export const selectFavouriteCarsExist = (state) =>
	Boolean(state.cars.favourite.length);
