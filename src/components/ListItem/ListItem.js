import React from 'react';

import './ListItem.scss';

class ListItem extends React.Component {
  removeComic = (e) => {
    e.preventDefault();
    const { deleteListItem, issue } = this.props;
    deleteListItem(issue.id);
  }

  updateComic = (e) => {
    const { issue, updateList } = this.props;
    const newIssue = { ...issue };
    newIssue.isRead = !issue.isRead;
    e.preventDefault();
    updateList(issue.id, newIssue);
  }

  render() {
    const { issue, read } = this.props;
    return (
      <div className="marvelComics col-2 d-flex flex-column">
       <h6>{issue.comicTitle}</h6>
       <div className="image-wrapper">
       <img src={issue.image} alt={issue.comicTitle} title={issue.comicTitle} className="comicImage"/>
       </div>
       <div className="button-wrapper">
        <button className="deleteComic btn btn-danger" onClick={this.removeComic}>Remove</button>
        { read !== true
          ? <button className="read btn btn-primary" onClick={this.updateComic}>Read</button>
          : null
        }
       </div>
     </div>
    );
  }
}

export default ListItem;
