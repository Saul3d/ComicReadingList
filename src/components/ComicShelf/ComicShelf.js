import React from 'react';

import getListItems from '../../helpers/data/getListItemData';
import Comics from '../Comics/Comics';

import './ComicShelf.scss';

class ComicShelf extends React.Component {
  state={
    comics: [],
  }

  getMyData = () => {
    getListItems.getComics()
      .then(comics => this.setState({ comics }))
      .catch(err => console.error('Could not get staff', err));
  }

  componentDidMount() {
    this.getMyData();
  }

  render() {
    const { comics } = this.state;
    return (
      <React.Fragment>
        <h1>Comics Page</h1>
        <Comics issues={comics} />
      </React.Fragment>
    );
  }
}

export default ComicShelf;
