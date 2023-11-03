import { jwtDecode } from "jwt-decode";

export const setToken = (token) => localStorage.setItem('token', token);

export const getToken = () => localStorage.getItem('token');

export const removeToken = () => localStorage.removeItem('token');

export const isTokenExpired = () => {
    const token = getToken();
    if (! token) 
        return true;
     // No token found
    const decodedToken = jwtDecode(token);
    return Date.now() >= decodedToken.exp * 1000;
};
