import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import HomeRouter from './routes/homeRoutes';
import AuthRouter from './routes/authRoutes';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedInUser } from './redux/features/auth/actions';
import { Box, LinearProgress } from '@mui/material';

export default function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth.status.user);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(getLoggedInUser());
    }
  }, [dispatch, token]);

  return (
    <>
      {loading ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : token ? (
        <HomeRouter />
      ) : (
        <AuthRouter />
      )}
      <ToastContainer />
    </>
  );
}
