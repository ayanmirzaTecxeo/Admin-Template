import SigninPage from '../pages/Signin';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function AuthRouter() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={`/`} replace />} />
      <Route path={'/'} element={<SigninPage />} />
    </Routes>
  );
}
