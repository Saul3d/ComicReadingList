import React from 'react';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import getListItemData from '../../helpers/data/getListData';

import './Lists.scss';

class Lists extends React.Component {
  state = {
    issues: [],
  }

  editThisMotha = () => {
    console.error('editing this list');
  }

  deleteThisMotha = () => {
    console.error('deleting this list');
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
      name,
      id,
      deleteListItem,
      updateList,
    } = this.props;

    return (
      <div className="list-wrapper">
        <Link className="marvelComicsLists d-flex flex-column" to={{
          pathname: `/list/${id}`,
          params: {
            id,
            name,
            issues,
            deleteListItem,
            updateList,
          },
        }} >
            <div className="test">{name}</div>
        </Link>
        <div className="button-wrapper">
          <button className="btn btn-danger" onClick={this.deleteThisMotha}>Delete</button>
          <button className="btn btn-secondary" onClick={this.editThisMotha}>Edit</button>
        </div>
      </div>
    );
  }
}

export default Lists;
