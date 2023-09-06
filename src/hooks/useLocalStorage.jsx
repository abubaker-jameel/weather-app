function useLocalStorage() {
  function handleSetLocalStorage(key, value) {
    return localStorage.setItem(key, value);
  }

  function handleGetLocalStorage(key) {
    return localStorage.getItem(key);
  }

  function handleRemoveLocalStorage(key) {
    return localStorage.removeItem(key);
  }
  return {
    handleGetLocalStorage,
    handleSetLocalStorage,
    handleRemoveLocalStorage,
  };
}

export default useLocalStorage;
