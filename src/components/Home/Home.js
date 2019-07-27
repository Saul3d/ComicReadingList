import React from 'react';

import getListItemData from '../../helpers/data/getListItemData';
import getListData from '../../helpers/data/getListData';
import Lists from '../Lists/Lists';
// import ListSingleView from '../ListSingleView/ListSingleView';


import './Home.scss';

class Home extends React.Component {
  state={
    issues: [],
    lists: [],
  }

  getMyComicListData = (listId) => {
    getListItemData.getComicsInList(listId)
      .then(issues => this.setState({ issues }))
      .catch(err => console.error('Could not get your comic list', err));
  }

  updateListItemData = (listid) => {
    getListItemData.getUpdateofListItems(listid)
      .then(issues => this.setState({ issues }))
      .catch(err => console.error('Could not update your comic list', err));
  }

  deleteListItem = (issueId) => {
    // console.error(issueId);
    getListItemData.deleteComic(issueId)
      .then(() => this.getAllComicsFromFirebase())
      .catch(err => console.error('Could not delete', err));
    // console.error('remove this comic from the list');
  };

  updateList = (issueId, issue) => {
    getListItemData.updateListItem(issueId, issue)
      .then(() => this.getAllComicsFromFirebase())
      .catch(err => console.error('Could update', err));
  };

  getAllComicsFromFirebase = () => {
    getListData.getMyComicsFromFB()
      .then(issues => this.setState({ issues }))
      .catch(err => console.error('Could not get lists', err));
  }

  componentDidMount() {
    // Hard coded list1 so that onload somthing is displayed
    // this.getMyComicListData('list1');
    this.getAllComicsFromFirebase();
  }

  componentDidUpdate() {
  }

  render() {
    const { issues, lists } = this.state;

    return (
      <React.Fragment>
        <Lists className="myLists"
        issues={issues}
        lists={lists}
        deleteListItem={this.deleteListItem}
        updateList={this.updateList}
        />
      </React.Fragment>
    );
  }
}

export default Home;
