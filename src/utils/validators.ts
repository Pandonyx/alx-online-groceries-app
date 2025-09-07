import * as yup from 'yup';

export const phoneSchema = yup.object().shape({
  phone: yup
    .string()
    .required('Phone number is required')
    .min(10, 'Phone number must be at least 10 digits'),
});

export const verificationSchema = yup.object().shape({
  code: yup
    .string()
    .required('Verification code is required')
    .length(4, 'Verification code must be 4 digits'),
});

export const loginSchema = yup.object().shape({
  phone: yup
    .string()
    .required('Phone number is required')
    .min(10, 'Phone number must be at least 10 digits'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .required('Full name is required')
    .min(2, 'Name must be at least 2 characters'),
  phone: yup
    .string()
    .required('Phone number is required')
    .min(10, 'Phone number must be at least 10 digits'),
  email: yup
    .string()
    .email('Invalid email format')
    .optional(),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};
