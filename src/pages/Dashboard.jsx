import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export default function DashboardAppPage() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <Helmet>
        <title> Allie </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back {user?.username}
        </Typography>
      </Container>
    </>
  );
}
