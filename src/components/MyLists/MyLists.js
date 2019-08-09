import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

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


  editList = (listObject) => {
    console.error(listObject);
    this.setState({ editingList: listObject, showModal: true, isEditing: true });
  };

  addFormSubmit = (addList) => {
    const addListCopy = { ...addList };
    addListCopy.uid = firebase.auth().currentUser.uid;
    getListData.createList(addListCopy)
      .then(() => {
        this.closeModal();
        this.getMyComicLists();
      })
      .catch(err => console.error('unable to edit', err));
  }

  editFormSubmit = (editedList, id) => {
    const editedListCopy = { ...editedList };
    editedListCopy.uid = firebase.auth().currentUser.uid;
    getListData.editFormSubmit(editedListCopy, id)
      .then(() => {
        this.closeModal();
        this.getMyComicLists();
      })
      .catch(err => console.error('unable to edit', err));
  }

  deleteFormSubmit = (id) => {
    getListData.deleteList(id)
      .then(() => {
        this.getMyComicLists();
      })
      .catch(err => console.error('unable to delete', err));
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
        listObject={list}
        issues={userIssues}
        deleteListItem={deleteListItem}
        updateList={updateList}
        getMyComicListData={this.getMyComicListData}
        editList = {this.editList}
        deleteFormSubmit={this.deleteFormSubmit}
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
            <h4>Add List</h4>
          </div>
        </span>
        </div>

        <NewList
          lists={lists}
          isOpen={this.state.showModal}
          closeModal={this.closeModal}
          editFormSubmit={this.editFormSubmit}
          isEditing={this.state.isEditing}
          listObject={this.state.editingList}
          addFormSubmit={this.addFormSubmit}
        />
     </React.Fragment>
    );
  }
}

export default MyList;
