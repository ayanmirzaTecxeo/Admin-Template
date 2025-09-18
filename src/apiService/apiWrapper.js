import axios from 'axios';
import { constants } from 'src/constants';
import { clearStorage, retrieveData, storeData } from 'src/helper/storageHelper';

const baseURL = process.env.REACT_APP_BASE_URL;
// const baseURL = "http://192.168.100.30:5000";

// ---------------- Axios Instance ----------------
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ---------------- Request Interceptor ----------------
api.interceptors.request.use(
  async (config) => {
    const token = retrieveData(constants.accessToken);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ---------------- Response Interceptor ----------------
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;

    // Handle expired access token
    if ((status === 401 || status === 498) && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = retrieveData(constants.refreshToken);

        if (!refreshToken) {
          clearStorage();
          window.location.reload();
          return Promise.reject(error);
        }

        // Call backend renew route
        const res = await axios.post(`${baseURL}auth/refresh-token`, {
          refresh_token: refreshToken,
        });

        const { access_token } = res.data.tokens;

        // Save new access token
        storeData(constants.accessToken, access_token);

        // Retry the original request with new access token
        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.log('Refresh token failed:', refreshError?.response?.data || refreshError.message);
        clearStorage();
        window.location.reload();
      }
    }

    return Promise.reject(error);
  }
);

// ---------------- Generic API Caller ----------------
const apiService = async (endpoint, method, data = null, extraHeaders = {}) => {
  try {
    let body = data;
    const headers = { ...extraHeaders };

    if (data && !(data instanceof FormData)) {
      body = JSON.stringify(data);
      headers['Content-Type'] = 'application/json';
    }

    const config = {
      url: endpoint,
      method,
      headers,
    };

    if (body !== null && body !== undefined) {
      config.data = body;
    }

    const res = await api(config);
    return res.data;
  } catch (error) {
    console.log('API error:', error?.response?.data || error?.message);
    throw error?.response?.data || { message: 'Something went wrong' };
  }
};

export default apiService;
