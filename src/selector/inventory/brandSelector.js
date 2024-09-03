export const selectBrand = (state) => state.brand;

export const selectLoadingBrand = (state) => selectBrand(state).loading;
export const selectErrorBrand = (state) => selectBrand(state).error;
export const selectDataBrand = (state) => selectBrand(state).brand;