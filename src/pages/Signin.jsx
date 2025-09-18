import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import Wrapper from 'src/components/common/wrapper';
import SigninForm from 'src/components/form/SigninForm';

const SigninPage = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Allie</title>
      </Helmet>
      <Box
        component="img"
        src="/logo.png"
        alt="logo"
        sx={{
          height: '200px',
          width: '400px',
          mixBlendMode: 'multiply',
          my: '2rem',
        }}
      />
      <Typography sx={{ mb: 3 }} variant="h4" color={'primary'}>
        Sign in to Allie
      </Typography>
      <SigninForm />
    </Wrapper>
  );
};

export default SigninPage;
