import { AUTH_ME, SIGNIN } from '../../../apiService/apiDeclaration';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getLoggedInUser = createAsyncThunk('auth/getLoggedInUser', AUTH_ME);

export const signIn = createAsyncThunk('auth/signInUser', SIGNIN);
