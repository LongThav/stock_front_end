export const selectUnit = (state) => state.unit;


export const selectLoadingUnit = (state) => selectUnit(state).loading;
export const selectErrorUnit = (state) => selectUnit(state).error;
export const selectDataUnit = (state) => selectUnit(state).unit;