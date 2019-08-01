import React from 'react';

import getListItems from '../../helpers/data/getListItemData';
import Comics from '../Comics/Comics';

import './ComicShelf.scss';
import getListData from '../../helpers/data/getListData';

class ComicShelf extends React.Component {
  state={
    comics: [],
    list: [],
  }

  getMyData = () => {
    getListItems.getComics()
      .then(comics => this.setState({ comics }))
      .catch(err => console.error('Could not get comics from Marvel', err));

    getListData.getLists()
      .then(list => this.setState({ list }))
      .catch(err => console.error('Could not get your list of comics', err));
  }

  componentDidMount() {
    this.getMyData();
  }

  render() {
    const { comics, list } = this.state;
    return (
      <React.Fragment>
        <h1>Comics Page</h1>
       <Comics issues={comics} list={list}/>
      </React.Fragment>
    );
  }
}

export default ComicShelf;
