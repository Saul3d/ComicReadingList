import React from 'react';
import QueuedSection from '../QueuedSection/QueuedSection';
import ReadSection from '../ReadSection/ReadSection';
import './SingleListView.scss';

class SingleListView extends React.Component {
  render() {
    return (
      <div className="list-wrapper">
        <div className="queuedList-wrapper">
        <h4>Queue</h4>
          <QueuedSection
          issues={this.props.location.state.issues}
          deleteListItem={this.props.location.state.deleteListItem}
          updateList={this.props.location.state.updateList}
        />
        </div>
        <div className="readList-wrapper">
          <h4>Read</h4>
            <ReadSection
            issues={this.props.location.state.issues}
            deleteListItem={this.props.location.state.deleteListItem}
          />
        </div>
        </div>
    );
  }
}

export default SingleListView;
