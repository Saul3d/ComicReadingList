import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;
// this function gets all comics from the marvel api
const getComics = (limit, offset, dateRange) => new Promise((resolve, reject) => {
  axios.get(`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${apiKeys.marvelApiKeys}&limit=${limit}&orderBy=title&offset=${offset}&dateRange=${dateRange}`)
  // axios.get(`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${apiKeys.marvelApiKeys}&limit=20&orderBy=title`)
    .then((res) => {
      const comics = [];
      const allData = res.data.data.results;
      allData.map(
        comic => comics.push(comic),
      );
      resolve(comics);
    })
    .catch();
});
// this function gets comics in a specific list with an id
const getComicsInList = listId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/listItem.json?orderBy="listId"&equalTo="${listId}"`)
    .then((res) => {
      const issues = [];
      const userComicListResults = res.data;
      Object.keys(userComicListResults).forEach((comicsInList) => {
        // eslint-disable-next-line no-param-reassign
        userComicListResults[comicsInList].id = comicsInList;
        issues.push(userComicListResults[comicsInList]);
      });
      resolve(issues);
    })
    .catch(err => reject(err));
});

const deleteComic = comicIssueId => axios.delete(`${firebaseUrl}/listItem/${comicIssueId}.json`);
const updateListItem = (comicIssueId, issue) => axios.put(`${firebaseUrl}/listItem/${comicIssueId}.json`, issue);

export default {
  getComics,
  getComicsInList,
  deleteComic,
  updateListItem,
};
