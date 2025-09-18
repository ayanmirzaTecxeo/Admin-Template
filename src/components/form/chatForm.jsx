import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import RichText from '../formFields/richText';
import { chatFormSchema } from 'src/config/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import LoaderButton from '../loaderButton/loaderButton';

const ChatForm = () => {
  const loading = false;
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(chatFormSchema),
  });

  const onUpdate = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onUpdate)}>
      <Grid container spacing={2.5}>
        <Grid item xs={12}>
          <RichText
            label={'Title (English)'}
            controller={{
              name: 'email1',
              control: control,
              errors: errors.email,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RichText
            label={'Title (French)'}
            controller={{
              name: 'email',
              control: control,
              errors: errors.email,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RichText
            label={'Description (English)'}
            controller={{
              name: 'email2',
              control: control,
              errors: errors.email,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RichText
            label={'Description (French)'}
            controller={{
              name: 'email3',
              control: control,
              errors: errors.email,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RichText
            label={'Show Category heading (English)'}
            controller={{
              name: 'email4',
              control: control,
              errors: errors.email,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RichText
            label={'Show Category heading (French)'}
            controller={{
              name: 'email5',
              control: control,
              errors: errors.email,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RichText
            label={'Show Category Button (English)'}
            controller={{
              name: 'email6',
              control: control,
              errors: errors.email,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RichText
            label={'Show Category Button (French)'}
            controller={{
              name: 'email7',
              control: control,
              errors: errors.email,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RichText
            label={'Category Title (English)'}
            controller={{
              name: 'email8',
              control: control,
              errors: errors.email,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RichText
            label={'Category Title (French)'}
            controller={{
              name: 'email9',
              control: control,
              errors: errors.email,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RichText
            label={'Prompt Title (English)'}
            controller={{
              name: 'email11',
              control: control,
              errors: errors.email,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RichText
            label={'Prompt Title (French)'}
            controller={{
              name: 'email12',
              control: control,
              errors: errors.email,
            }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <LoaderButton disabled={!isValid} loading={loading} buttonText={'Update'} type="submit" />
        </Grid>
      </Grid>
    </form>
  );
};

export default ChatForm;
