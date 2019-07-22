import React from 'react';

import getComicsData from '../../helpers/data/getComicsData';
import List from '../List/List';

import './MyList.scss';

class MyList extends React.Component {
  state={
    issues: [],
  }

  getMyComicListData = () => {
    getComicsData.getMyListOfComics()
      .then(issues => this.setState({ issues }))
      .catch(err => console.error('Could not get your comic list', err));
  }

  componentDidMount() {
    this.getMyComicListData();
  }

  render() {
    const { issues } = this.state;
    console.error(issues);
    return (
      <React.Fragment>
        <h4>Queue</h4>
        <List issues={issues} />
        <h4>Read</h4>
      </React.Fragment>

    );
  }
}

export default MyList;
