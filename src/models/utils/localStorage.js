// WARNING: as this is used both by auth and internal application there could be conflicts among names
// so please scope your storage keys and prepend with `sy-`.

const storage = window.localStorage;

export const setLocalStorageValue = (key, value, _opts = {}) => {
  storage.setItem(key, JSON.stringify(value));
};
export const getLocalStorageValue = key => JSON.parse(storage.getItem(key));
export const clearLocalStorage = () => storage.clear();
