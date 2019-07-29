import React from 'react';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import SingleListView from '../SingleListView/SingleListView';
import getListItemData from '../../helpers/data/getListItemData';
import './Lists.scss';

class Lists extends React.Component {
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
        <Link className="marvelComics col-2 d-flex flex-column" to={{
          pathname: '/list',
          state: {
            id,
            name,
            issues,
            deleteListItem,
            updateList,
          },
        }} >
            <div className="test">{name}</div>
            <div>{id}</div>
            <button className="btn btn-danger">Delete</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Lists;
