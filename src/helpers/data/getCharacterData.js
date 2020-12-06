import axios from 'axios';
import apiKeys from '../apiKeys.json';

const getCharacters = () => new Promise((resolve, reject) => {
  axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKeys.marvelApiKeys}&limit=100`)
    .then((res) => {
      const characters = [];
      const allData = res.data.data.results;
      allData.map(
        character => characters.push(character),
      );
      resolve(characters);
    })
    .catch();
});

export default { getCharacters };
