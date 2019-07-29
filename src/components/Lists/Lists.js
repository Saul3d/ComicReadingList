import React from 'react';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import SingleListView from '../SingleListView/SingleListView';
import getListItemData from '../../helpers/data/getListItemData';
import './Lists.scss';

class Lists extends React.Component {
  state = {
    issues: [],
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
      <React.Fragment>
        <div className="marvelComics col-2 d-flex flex-column" to="SingleListView">
          <div className="test">{name}</div>
          <div>{id}</div>
          <button className="btn btn-danger">Delete</button>
        </div>

      <SingleListView
        issues={issues}
        deleteListItem={deleteListItem}
        updateList={updateList}
      />
      </React.Fragment>
    );
  }
}

export default Lists;
