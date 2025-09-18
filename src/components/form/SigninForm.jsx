import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ICONS } from 'src/assets/library';
import { signinFormScheme } from 'src/config/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'src/redux/features/auth/actions';
import LoaderButton from 'src/components/loaderButton/loaderButton';
import CustomTextField from 'src/components/formFields/textField';

const SigninForm = ({ loading }) => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signinFormScheme),
  });

  const onSignin = (data) => {
    dispatch(signIn(data));
  };
  return (
    <form onSubmit={handleSubmit(onSignin)}>
      <Grid container spacing={2.5}>
        <Grid item xs={12}>
          <CustomTextField
            placeholder={'name@domain.com'}
            type="email"
            icon={ICONS.email}
            controller={{
              name: 'email',
              control: control,
              errors: errors.email,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomTextField
            isPassword
            placeholder={'Password'}
            type="password"
            icon={ICONS.password}
            controller={{
              name: 'password',
              control: control,
              errors: errors.password,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <LoaderButton disabled={!isValid} loading={loading} buttonText={'Sign in'} type="submit" />
        </Grid>
      </Grid>
    </form>
  );
};

export default SigninForm;
