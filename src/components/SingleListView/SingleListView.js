import React from 'react';
import QueuedSection from '../QueuedSection/QueuedSection';
import ReadSection from '../ReadSection/ReadSection';
import './SingleListView.scss';

class SingleListView extends React.Component {
  render() {
    const { issues, deleteListItem } = this.props;
    return (
      <div className="list-wrapper">
        <div className="queuedList-wrapper">
        <h4>Queue</h4>
          <QueuedSection
          issues={issues}
          deleteListItem={deleteListItem}
          updateList={this.props.updateList}
        />
        </div>
        <div className="readList-wrapper">
          <h4>Read</h4>
            <ReadSection
            issues={issues}
            deleteListItem={deleteListItem}
          />
        </div>
        </div>
    );
  }
}

export default SingleListView;
