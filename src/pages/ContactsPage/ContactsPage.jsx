import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors"; 

const ContactPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts); 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactPage;