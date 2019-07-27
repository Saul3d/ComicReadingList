import React from 'react';
import ReadList from './ReadList/ReadList';

import './ReadSection.scss';

class ReadSection extends React.Component {
  render() {
    const { issues, deleteListItem, updateList } = this.props;
    return (
      <ReadList
      key={issues.id}
      issues={issues}
      deleteListItem={deleteListItem}
      lists={this.props.lists}
      updateList={updateList}
      />
    );
  }
}

export default ReadSection;
