import React from 'react';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import getListItemData from '../../helpers/data/getListData';

import './Lists.scss';

class Lists extends React.Component {
  state = {
    issues: [],
  }

  editMe = (e) => {
    e.preventDefault();
    const { listObject, editList } = this.props;
    editList(listObject);
  };

  deleteThisMotha = () => {
    const { listObject, deleteFormSubmit } = this.props;
    deleteFormSubmit(listObject.id);
  }

  getMyComicListData = (listId) => {
    getListItemData.getComicsInList(listId)
      .then(issues => this.setState({ issues }))
      .catch(err => console.error('Could not get your comic list', err));
  }

  componentDidMount() {
  }

  render() {
    const {
      issues,
      deleteListItem,
      updateList,
      listObject,
    } = this.props;

    return (
      <div className="list-wrapper">
        <Link className="marvelComicsLists d-flex flex-column" to={{
          pathname: `/list/${listObject.id}`,
          params: {
            listObject,
            issues,
            deleteListItem,
            updateList,
          },
        }} >
            <div className="test">{listObject.name}</div>
        </Link>
        <div className="button-wrapper">
          <button className="btn btn-danger" onClick={this.deleteThisMotha}>Delete</button>
          <button className="btn btn-secondary" onClick={this.editMe}>Edit</button>
        </div>
      </div>
    );
  }
}

export default Lists;
