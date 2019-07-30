import React from 'react';

import getListItemData from '../../helpers/data/getListItemData';
import getListData from '../../helpers/data/getListData';
import Lists from '../Lists/Lists';
import NewList from '../NewList/NewList';

import './MyLists.scss';

const defaultList = {
  name: '',
};

class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  state={
    issues: [],
    lists: [],
    showModal: false,
    newList: defaultList,
    isEditing: false,
    isOpen: false,
  }

  getMyComicListData = (listId) => {
    getListItemData.getComicsInList(listId)
      .then(issues => this.setState({ issues }))
      .catch(err => console.error('Could not get your comic list', err));
  }

  getMyComicLists = () => {
    getListData.getLists()
      .then((lists) => {
        this.setState({ lists });
      })
      .catch(err => console.error('Could not get your comic list', err));
  }

  displayModal = () => {
    // console.error('this is working');
    this.setState({ newlist: defaultList });
    this.toggleModal();
  }

  toggleModal() {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  }

  closeModal() {
    console.error(this);
    this.setState({ isEditing: false });
    this.toggleModal();
  }

  componentDidMount() {
    // Hard coded list1 so that onload something is displayed
    // this.getMyComicListData('list1');
    // this.getAllComicsFromFirebase();
    this.getMyComicLists();
  }

  render() {
    const { lists } = this.state;
    const { userIssues, updateList, deleteListItem } = this.props;
    const comicsLists = lists.map(list => (
      <Lists
        key={list.id}
        name={list.name}
        id={list.id}
        issues={userIssues}
        deleteListItem={deleteListItem}
        updateList={updateList}
        getMyComicListData={this.getMyComicListData}
        />
    ));
    return (
      <React.Fragment>
        <div className="listContainer">
          { comicsLists }
          <span className="addComic" onClick={this.displayModal}>
          <div className="addButton">
            <div className="plus-wrapper">
              <h1>+</h1>
            </div>
            <h4>Add Walk</h4>
          </div>
        </span>
        </div>

        <NewList
          lists={lists}
          isOpen={this.state.showModal}
          closeModal={this.closeModal}
          formSubmit={this.formSubmit}
          editFormSubmit={this.editFormSubmit}
          isEditing={this.state.isEditing}
        />
     </React.Fragment>
    );
  }
}

export default MyList;
