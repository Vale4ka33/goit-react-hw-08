import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contactItem) => (
        <li key={contactItem.id} className={css.contactItems}>
          <Contact
            name={contactItem.name}
            number={contactItem.phone}
            id={contactItem.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
