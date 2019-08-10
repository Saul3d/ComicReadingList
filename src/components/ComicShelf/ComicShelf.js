import React from 'react';

import getListItems from '../../helpers/data/getListItemData';
import Comics from '../Comics/Comics';

import './ComicShelf.scss';
import getListData from '../../helpers/data/getListData';

class ComicShelf extends React.Component {
  state={
    limit: 20,
    offset: 20,
    dateRange: '2000-01-01,2019-08-01',
    comics: [],
    list: [],
  }

  getMyData = () => {
    getListItems.getComics(this.state.limit, this.state.offset, this.state.dateRange)
      .then(comics => this.setState({ comics }))
      .catch(err => console.error('Could not get comics from Marvel', err));

    getListData.getLists()
      .then(list => this.setState({ list }))
      .catch(err => console.error('Could not get your list of comics', err));
  }

  componentDidMount() {
    const { limit, offset, dateRange } = this.state;
    this.refs.myScroll.addEventListener('scroll', () => {
      if (
        // eslint-disable-next-line max-len
        this.refs.myScroll.scrollTop + this.refs.myScroll.clientHeight >= this.refs.myScroll.scrollHeight) {
        this.setState({
          limit: limit + 20,
          offset: offset + 20,
        });
        getListItems.getComics(limit, offset, dateRange);
      }
    });
    this.getMyData();
  }

  render() {
    const { comics, list } = this.state;
    return (
      <div className="shelf" ref="myScroll">
        <h1>Comics Page</h1>
       <Comics key={comics.id} issues={comics} list={list}/>
      </div>
    );
  }
}

export default ComicShelf;
