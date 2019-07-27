import React from 'react';
import ListSingleView from '../ListSingleView/ListSingleView';

import './Lists.scss';

class Lists extends React.Component {
  render() {
    const {
      issues,
      lists,
      deleteListItem,
      updateList,
    } = this.props;

    return (
      <ListSingleView
        issues={issues}
        deleteListItem={deleteListItem}
        updateList={updateList}
      />
    );
  }
}

export default Lists;
