import * as yup from 'yup';

export const validationSignIn = yup.object({
    username: yup
        .string('Enter your username')
        .min(4, 'Username must between 4 and 15 characters')
        .max(15, 'Username must between 4 and 15 characters')
        .matches(/^\S+$/, 'Username must not have whitespace')
        .required('*Username is required'),
    password: yup
        .string('Enter your password')
        .min(4, 'Password must between 4 and 15 characters')
        .max(15, 'Password must between 4 and 15 characters')
        .required('*Password is required'),
});