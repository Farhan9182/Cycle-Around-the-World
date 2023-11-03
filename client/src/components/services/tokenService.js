export const setToken = (token) => localStorage.setItem('token', token);

export const getToken = () => localStorage.getItem('token');

export const removeToken = () => localStorage.removeItem('token');

export const isTokenExpired = () => {
    const token = getToken();
    if (! token) 
        return true;
     // No token found
    const decodedToken = decode(token); // You'll need a library to decode JWT, like 'jwt-decode'
    return Date.now() >= decodedToken.exp * 1000;
};
