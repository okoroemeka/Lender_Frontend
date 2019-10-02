const loadState = () => {
  try {
    const serializeState = window.localStorage.getItem('state');
    if (serializeState === null) {
      return undefined;
    }
    return JSON.parse(serializeState);
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log('error');
  }
};

export { loadState, saveState };
