
import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getComics = () => new Promise((resolve, reject) => {
  axios.get(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${apiKeys.marvelApiKeys}&limit=100&orderBy=title`)
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

const getMyListOfComics = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/listItem.json?listId="list1"&sortBy="comicsTitle"`)
    .then((res) => {
      const issues = [];
      const userComicListResults = res.data;
      console.error('saul', userComicListResults);
      Object.keys(userComicListResults).forEach((comicsInList) => {
        issues.push(userComicListResults[comicsInList]);
      });
      resolve(issues);
    })
    .catch(err => reject(err));
});

export default { getComics, getMyListOfComics };
