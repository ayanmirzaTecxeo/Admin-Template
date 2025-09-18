import { Grid } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import RichText from '../formFields/richText';
import { privacyFormSchema } from 'src/config/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import LoaderButton from '../loaderButton/loaderButton';
import PreventReload from '../common/preventReload';

const PrivacyForm = () => {
  const loading = false;

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(privacyFormSchema),
  });
  const {
    formState: { errors, isValid },
    control,
    handleSubmit,
    register,
  } = methods;

  //   console.log('isDirty====', isDirty);
  const onUpdate = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <PreventReload />
      <form onSubmit={handleSubmit(onUpdate)}>
        <Grid container spacing={2.5}>
          <Grid item xs={12}>
            <RichText
              label={'Title (English)'}
              register={register}
              controller={{
                name: 'title.en',
                control: control,
                errors: errors?.title?.en,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <RichText
              label={'Title (French)'}
              controller={{
                name: 'title.fr',
                control: control,
                errors: errors?.title?.fr,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <RichText
              label={'Description (English)'}
              controller={{
                name: 'description.en',
                control: control,
                errors: errors?.description?.en,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <RichText
              label={'Description (French)'}
              controller={{
                name: 'description.fr',
                control: control,
                errors: errors?.description?.fr,
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <LoaderButton disabled={!isValid} loading={loading} buttonText={'Update'} type="submit" />
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default PrivacyForm;
