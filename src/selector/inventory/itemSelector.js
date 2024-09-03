// src/redux/selectors/inventorySelectors.js

export const selectInventory = (state) => state.inventory;

export const selectLoading = (state) => selectInventory(state).loading;
export const selectItems = (state) => selectInventory(state).item;
export const selectPageable = (state) => selectInventory(state).pageable;
export const selectTotalPages = (state) => selectInventory(state).totalPages;
export const selectTotalElements = (state) => selectInventory(state).totalElements;
export const selectError = (state) => selectInventory(state).error;