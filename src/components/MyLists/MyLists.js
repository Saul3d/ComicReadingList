import React from 'react';

import getListItemData from '../../helpers/data/getListItemData';
import getListData from '../../helpers/data/getListData';
import Lists from '../Lists/Lists';
// import ListSingleView from '../ListSingleView/ListSingleView';


import './MyLists.scss';

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

  getMyComicLists = () => {
    getListData.getLists()
      .then((lists) => {
        console.error('hi', lists);
        this.setState({ lists });
      })
      .catch(err => console.error('Could not get your comic list', err));
  }

  componentDidMount() {
    // Hard coded list1 so that onload somthing is displayed
    // this.getMyComicListData('list1');
    this.getAllComicsFromFirebase();
    this.getMyComicLists();
  }

  render() {
    const { issues, lists } = this.state;
    const comicsLists = lists.map(list => (
      <Lists
        key={list.id}
        name={list.name}
        id={list.id}
        issues={issues}
        deleteListItem={this.deleteListItem}
        updateList={this.updateList}
        />
    ));
    return (
      <React.Fragment>
        <div className="listContainer">
          { comicsLists }
        </div>
     </React.Fragment>
    );
  }
}

export default Home;
