import * as yup from 'yup';

const commonScheme = {
  required: yup.string().required('This is a required field'),
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    // .max(12, 'Password must not exceed 12 characters')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    // .max(12, 'Password must not exceed 12 characters')
    .required('Password is required')
    .oneOf([yup.ref('password'), null], 'Password must match'),
};

export const signinFormScheme = yup.object().shape({
  email: commonScheme.email,
  password: commonScheme.password,
});

export const chatFormSchema = yup.object().shape({
  email: commonScheme.required,
});

export const privacyFormSchema = yup.object().shape({
  title: yup.object().shape({
    en: commonScheme.required,
    fr: commonScheme.required,
  }),
  description: yup.object().shape({
    en: commonScheme.required,
    fr: commonScheme.required,
  }),
});
