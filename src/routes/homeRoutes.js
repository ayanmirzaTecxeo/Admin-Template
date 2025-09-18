import UserPage from 'src/pages/User';
import DashboardAppPage from 'src/pages/Dashboard';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from 'src/layouts/dashboard/DashboardLayout';

export default function HomeRouter() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={`/`} replace />} />
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<DashboardAppPage />} />
        <Route path="/user" element={<UserPage />} />
      </Route>
    </Routes>
  );
}
