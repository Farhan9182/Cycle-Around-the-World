import axios from 'axios';
import {getToken} from './tokenService';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const instance = axios.create({baseURL: API_BASE_URL});

// Add an interceptor to include the authorization token with every request
instance.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const loginApi = async (username, password) => {
    try {
        const response = await instance.post('/auth/login', {username, password});
        return response;
    } catch (error) {
        return error.response;
    }
};

export const signupApi = async (email, username, password) => {
    try {
        const response = await instance.post('/auth/signup', {email, username, password});
        return response;
    } catch (error) {
        return error.response;
    }
};

export const fetchTouristSpots = async () => {
    try {
        const response = await instance.get('/spots');
        return response;
    } catch (error) {
        return error.response;
    }
};

export const fetchSpotDetails = async (spotName) => {
    try {
        const response = await instance.get(`/spots/${spotName}`);
        return response;
    } catch (error) {
        return error.response;
    }
};

export const calculateCyclingTime = async (longitude, latitude, spotName, dailyCyclingHours, cyclingSpeed) => {
    try {
        const response = await instance.post('/calculate/cyclingTime', {
            longitude,
            latitude,
            spotName,
            dailyCyclingHours,
            cyclingSpeed
        });
        return response;
    } catch (error) {
        return error.response;
    }
};

export default instance;
