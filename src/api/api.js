import axios from 'axios';

const contactsApi = axios.create({
  baseURL: 'https://64c4c41867cfdca3b660f327.mockapi.io/contacts/',
});

export const getContacts = async () => {
  const { data } = await contactsApi.get();
  return data;
};

export const deleteContact = async id => {
  const { data } = await contactsApi.delete(id);
  return data;
};

export const addContact = async contact => {
  const { data } = await contactsApi.post('', contact);
  return data;
};
