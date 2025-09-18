import { createSlice } from '@reduxjs/toolkit';
import { getLoggedInUser, signIn } from './actions';
import { constants } from 'src/constants';
import { clearStorage, retrieveData, storeData } from 'src/helper/storageHelper';

const initialState = {
  user: null,
  token: retrieveData(constants.accessToken),
  refreshToken: retrieveData(constants.refreshToken),
  status: {
    user: { loading: false, errorMessage: '' },
    join: { loading: false, errorMessage: '' },
    signIn: { loading: false, errorMessage: '' },
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
    signOut: (state) => {
      state.user = null;
      clearStorage();
      state.token = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // getLoggedInUser
      .addCase(getLoggedInUser.pending, (state) => {
        state.status.user.loading = true;
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.status.user.loading = false;
        state.user = action.payload.user;
      })
      .addCase(getLoggedInUser.rejected, (state, action) => {
        state.status.user.loading = false;
        state.status.user.errorMessage = action.error.message;
      })
      // postSignin
      .addCase(signIn.pending, (state) => {
        state.status.signIn.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status.signIn.loading = false;
        state.token = action.payload.token;
        state.refreshToken = action.refreshToken;
        state.user = action.payload.user;
        storeData(constants.accessToken, action.payload.token);
        storeData(constants.refreshToken, action.payload.refreshToken);
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status.signIn.loading = false;
        state.status.signIn.errorMessage = action.error.message;
      });
  },
});

export const { reset, signOut } = authSlice.actions;

export default authSlice.reducer;
