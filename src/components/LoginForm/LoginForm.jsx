import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import style from './LoginForm.module.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short!').required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(login(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={style.form}>
          <div className={style.field}>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" className={style.input} />
            <ErrorMessage name="email" component="div" className={style.error} />
          </div>
          <div className={style.field}>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" className={style.input} />
            <ErrorMessage name="password" component="div" className={style.error} />
          </div>
          <button type="submit" className={style.btn} disabled={isSubmitting}>
            Log in
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;