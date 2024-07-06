import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import style from './RegistrationForm.module.css';
import { register } from '../../redux/auth/operations';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Name is too short!').required('Name is required'),
  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Email format is invalid')
    .required('Email is required'),
  password: Yup.string()
    .min(4, 'Password is too short!')
    .required('Password must be longer than 4 characters!'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(
          register({
            name: values.name,
            email: values.email,
            password: values.password,
          })
        )
          .unwrap()
          .then(() => {
            toast.success('Registration successful!');
          })
          .catch((error) => {
            toast.error(
              error === 400
                ? 'Email is already in use'
                : 'Something went wrong! Please try again later.'
            );
          });
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={style.form}>
          <div className={style.field}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field name="name" type="text" id={nameFieldId} className={style.input} />
            {errors.name && touched.name && (
              <span className={style.error}>{errors.name}</span>
            )}
          </div>

          <div className={style.field}>
            <label htmlFor={emailFieldId}>Email</label>
            <Field name="email" type="email" id={emailFieldId} className={style.input} />
            {errors.email && touched.email && (
              <span className={style.error}>{errors.email}</span>
            )}
          </div>

          <div className={style.field}>
            <label htmlFor={passwordFieldId}>Password</label>
            <Field name="password" type="password" id={passwordFieldId} className={style.input} />
            {errors.password && touched.password && (
              <span className={style.error}>{errors.password}</span>
            )}
          </div>

          <button type="submit" className={style.btn}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;