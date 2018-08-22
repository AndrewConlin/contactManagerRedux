import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, GET_CONTACT, UPDATE_CONTACT } from './types';
import axios from 'axios';

export const getContacts = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
    dispatch({
      type: GET_CONTACTS,
      payload: res.data
    });
  });
};

export const getContact = id => dispatch => {
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
    dispatch({
      type: GET_CONTACT,
      payload: res.data
    });
  });
};

export const deleteContact = id => dispatch => {
  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  });
};

export const addContact = newContact => async dispatch => {
  const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, newContact);

  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const updateContact = (id, updatedContact) => async dispatch => {
  const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedContact);
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};
