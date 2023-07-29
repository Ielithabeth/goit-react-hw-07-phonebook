import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContactsThunk } from 'redux/operations/contactsThunk';
import { selectContacts } from 'redux/selectors/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const users = useSelector(selectContacts);

  return (
    <section>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>
        {!users.length 
        ? (<p>Your phonebook is empty. Add your first contact</p>) 
        : (
        <>
          <Filter />
          <ContactList />
        </>
        )}
      </div>
    </section>
  );
};
