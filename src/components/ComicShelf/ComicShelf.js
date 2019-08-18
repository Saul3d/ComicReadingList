import React from 'react';

import getListItems from '../../helpers/data/getListItemData';
import Comics from '../Comics/Comics';

import './ComicShelf.scss';
import getListData from '../../helpers/data/getListData';

class ComicShelf extends React.Component {
  state={
    limit: 20,
    offset: 0,
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

  loadOnScroll = (e) => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight)
      && this.state.comics.length
    ) {
      this.setState({
        offset: this.state.offset + 20,
        limit: this.state.limit + 20,
      }, this.appendComics());
      console.error('limit: ', this.state.limit);
    }
  }

  componentDidMount() {
    this.getMyData();
    window.addEventListener('scroll', this.loadOnScroll);
  }

  appendComics = () => {
    const {
      comics,
      limit,
      offset,
      dateRange,
    } = this.state;

    console.error('offset: ', offset);
    getListItems.getComics(limit, offset, dateRange)
      .then((newComics) => { this.setState({ comics: [...comics, ...newComics] }); });
    console.error(comics);
  }

  render() {
    const { comics, list } = this.state;
    return (
      <div className="shelf" ref="myScroll">
        <h2>Marvel Comics</h2>
        <div className="comicsFromMarvel-wrapper">
          <Comics key={comics.id} issues={comics} list={list}/>
        </div>
        <span>"Data provided by Marvel. © 2014 Marvel"</span>
      </div>
    );
  }
}

export default ComicShelf;
