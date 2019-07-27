import React from 'react';
import QueuedList from './QueuedList/QueuedList';
import './QueuedSection.scss';

class QueuedSection extends React.Component {
  render() {
    const { issues, deleteListItem, updateList } = this.props;
    return (
      // eslint-disable-next-line max-len
      <QueuedList
      key={issues.id}
      issues={issues}
      deleteListItem={deleteListItem}
      lists={this.props.lists}
      updateList={updateList}
      />
    );
  }
}

export default QueuedSection;
