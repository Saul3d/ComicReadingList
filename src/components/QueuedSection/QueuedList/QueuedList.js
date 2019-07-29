import React from 'react';
import ListItem from '../../ListItem/ListItem';

import './QueuedList.scss';

class QueuedList extends React.Component {
  render() {
    const { issues, deleteListItem, updateList } = this.props;
    const makeComicQueuedList = issues.map(comicIssue => (
      comicIssue.isRead !== true
      // eslint-disable-next-line max-len
        ? <ListItem
            key={comicIssue.id}
            issue={comicIssue}
            deleteListItem={deleteListItem}
            isRead={comicIssue.isRead}
            updateList={updateList}
            />
        : null
    ));
    console.error('saul', issues);
    return (
      <div className="d-flex flex-wrap justify-content-start">
      {makeComicQueuedList}
      </div>
    );
  }
}

export default QueuedList;
