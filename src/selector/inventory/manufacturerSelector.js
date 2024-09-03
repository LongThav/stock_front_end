export const selectManufacturer = (state) => state.manufacturer;


export const selectLoadingManufacturer = (state) => selectManufacturer(state).loading;
export const selectErrorManufacturer = (state) => selectManufacturer(state).error;
export const selectDataManufacturer = (state) => selectManufacturer(state).manufacturer;