import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import style from './LoginForm.module.css';
import toast from 'react-hot-toast';
import { login } from '../../redux/auth/operations';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('This field is required to fill!'),
  password: Yup.string().required('This field is required to fill!'),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(
          login({
            email: values.email,
            password: values.password,
          })
        )
          .unwrap()
          .then(() => {
            toast.success('Log in successful');
          })
          .catch(() => {
            toast.error(`OOPS! An error occurred! Please, try again!`);
          });
        actions.resetForm();
      }}
    >
      <Form className={style.form}>
        <label htmlFor={emailFieldId}>Email</label>
        <Field name="email" type="email" id={emailFieldId} />
        <ErrorMessage className={style.error} name="email" component="span" />

        <label htmlFor={passwordFieldId}>Password</label>
        <Field name="password" type="password" id={passwordFieldId} />
        <ErrorMessage className={style.error} name="password" component="span" />

        <button className={style.btn} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}