import apiService from './apiWrapper';

/////////POST REQUESTS///////////
export const SIGNIN = async (body) => {
  return await apiService('auth/login', 'POST', { ...body });
};
export const ADD_USER = async (body) => {
  return await apiService('user', 'POST', body);
};

/////////GET REQUESTS///////////
export const AUTH_ME = async () => {
  return await apiService('auth/check-auth', 'GET');
};
export const GET_USER = async (params) => {
  return await apiService(`/admin/users?${params}`, 'GET');
};

/////////PUT REQUESTS///////////

/////////DELETE REQUESTS///////////
export const DELETE_USER = async (id) => {
  return await apiService(`user/${id}`, 'DELETE');
};
