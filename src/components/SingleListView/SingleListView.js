import React from 'react';
import QueuedSection from '../QueuedSection/QueuedSection';
import ReadSection from '../ReadSection/ReadSection';
import './SingleListView.scss';
import getListItemData from '../../helpers/data/getListItemData';

class SingleListView extends React.Component {
  state = {
    issues: [],
  }

  getIssues = () => {
    const listId = this.props.location.params.listObject.id;
    getListItemData.getComicsInList(listId)
      .then(issues => this.setState({ issues }))
      .catch(err => console.error('err in getComicsInList', err));
  }

  deleteListItem = (issueId) => {
    getListItemData.deleteComic(issueId)
      .then(() => this.getIssues())
      .catch(err => console.error('Could not delete', err));
  };

  updateList = (issueId, issue) => {
    getListItemData.updateListItem(issueId, issue)
      .then(() => this.getIssues())
      .catch(err => console.error('Could update', err));
  };

  componentDidMount() {
    this.getIssues();
  }

  render() {
    const { issues } = this.state;
    return (
      <div className="list-wrapper">
        <div className="queuedList-wrapper">
        <h4>Queue</h4>
          <QueuedSection
          issues={issues}
          deleteListItem={this.deleteListItem}
          updateList={this.updateList}
        />
        </div>
        <div className="readList-wrapper">
          <h4>Read</h4>
            <ReadSection
            issues={issues}
            deleteListItem={this.deleteListItem}
          />
        </div>
        </div>
    );
  }
}

export default SingleListView;
