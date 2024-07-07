import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import style from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { Toaster, toast } from "react-hot-toast";


const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d+$/, "Phone number is not valid")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const nameField = useId();
  const numberField = useId();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(addContact(values));
      actions.resetForm();
      toast.success("Contact added successfully!"); // Виклик повідомлення про успішне додавання
    } catch (error) {
      console.error("Failed to add contact", error);
    }
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        {() => (
          <Form className={style.formContainer}>
            <label htmlFor={nameField}>Name</label>
            <Field
              className={style.input}
              type="text"
              name="name"
              id={nameField}
            />
            <ErrorMessage
              className={style.error}
              name="name"
              component="span"
            />

            <label htmlFor={numberField}>Number</label>
            <Field
              className={style.input}
              type="text"
              name="number"
              id={numberField}
            />
            <ErrorMessage
              className={style.error}
              name="number"
              component="span"
            />

            <button className={style.btn} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
      <Toaster position="bottom-right" reverseOrder={false} /> {/* Відображення Toaster */}
    </>
  );
};

export default ContactForm;
