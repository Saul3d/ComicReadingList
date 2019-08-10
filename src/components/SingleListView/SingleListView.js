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
      <div className="comics-wrapper">
        <div className="queuedList-wrapper">
        <h2>Unread</h2>
          <QueuedSection
          issues={issues.filter(x => !x.isRead)}
          deleteListItem={this.deleteListItem}
          updateList={this.updateList}
          className="queuedSection-wrapper"
        />
        </div>
        <div className="readList-wrapper">
          <h2>Read</h2>
            <ReadSection
            issues={issues.filter(x => x.isRead)}
            deleteListItem={this.deleteListItem}
            className="readSection-wrapper"
          />
        </div>
        </div>
    );
  }
}

export default SingleListView;
