import React from 'react';
import ListItem from '../../ListItem/ListItem';

import './QueuedList.scss';

class QueuedList extends React.Component {
  render() {
    const { issues, deleteListItem, updateList } = this.props;
    const makeComicQueuedList = issues.map(comicIssue => (
        <ListItem
            key={comicIssue.id}
            issue={comicIssue}
            deleteListItem={deleteListItem}
            isRead={comicIssue.isRead}
            updateList={updateList}
            />
    ));
    return (
      <div className="d-flex flex-wrap justify-content-start queuedSection-wrapper">
      {makeComicQueuedList}
      </div>
    );
  }
}

export default QueuedList;
