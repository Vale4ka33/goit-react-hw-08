import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";

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
    <ul className={style.contactList}>
      {filteredContacts.map((contactItem) => (
        <li key={contactItem.id} className={style.contactItems}>
          <Contact
            name={contactItem.name}
            number={contactItem.number}
            id={contactItem.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
