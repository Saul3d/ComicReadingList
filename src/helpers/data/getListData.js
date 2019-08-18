import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getLists = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/list.json`)
    .then((res) => {
      const lists = [];
      const userListResults = res.data;
      Object.keys(userListResults).forEach((list) => {
        // eslint-disable-next-line no-param-reassign
        userListResults[list].id = list;
        lists.push(userListResults[list]);
      });
      // console.error('lists', lists);
      resolve(lists);
    })
    .catch(err => reject(err));
});

const getListByListId = listId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/list.json?orderBy="listId"&equalTo="${listId}"`)
    .then((res) => {
      const lists = [];
      const userListResults = res.data;
      Object.keys(userListResults).forEach((list) => {
        // eslint-disable-next-line no-param-reassign
        userListResults[list].id = list;
        lists.push(userListResults[list]);
      });
      console.error('lists', lists);
      resolve(lists);
    })
    .catch(err => reject(err));
});

const editFormSubmit = (newList, id) => axios.put(`${firebaseUrl}/list/${id}.json`, newList);
const deleteList = id => axios.delete(`${firebaseUrl}/list/${id}.json`);
const createList = addList => axios.post(`${firebaseUrl}/list.json`, addList);
const addComicToList = issue => axios.post(`${firebaseUrl}/listItem.json`, issue);

export default {
  getLists,
  getListByListId,
  editFormSubmit,
  deleteList,
  createList,
  addComicToList,
};
