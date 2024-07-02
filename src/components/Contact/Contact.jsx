import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactContainer}>
      <div>
        <div className={css.contactItem}>
          <IoMdPerson className={css.iconPerson} />
          <span>{name}</span>
        </div>
        <div className={css.contactItem}>
          <FaPhoneAlt className={css.iconPhone} />
          <span>{number}</span>
        </div>
      </div>
      <button className={css.btn} onClick={handleDelete} disabled={loading}>
        {loading ? "Deleting..." : "Delete"}
      </button>
      {error && <div className={css.error}>Error: {error}</div>}
    </div>
  );
};

export default Contact;
