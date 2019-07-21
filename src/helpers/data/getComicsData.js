
import axios from 'axios';
import apiKeys from '../apiKeys.json';

const getComics = () => new Promise((resolve, reject) => {
  axios.get(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${apiKeys.marvelApiKeys}&limit=100`)
    .then((res) => {
      const comics = [];
      const allData = res.data.data.results;
      allData.map(
        comic => comics.push(comic),
      );
      // console.error(allData.name);
      // console.error(typeof allData);
      resolve(comics);
    })
    .catch();
});

export default { getComics };
