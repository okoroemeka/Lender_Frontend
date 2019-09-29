const tokenKey = 'lenderAuthToken';
const setToken = (token) => window.localStorage.setItem(tokenKey, token);
const getUserToken = () => window.localStorage.getItem(tokenKey);
const removeToken = () => window.localStorage.removeItem(tokenKey);

export default { setToken, getUserToken, removeToken };
