import React from 'react';

import './ComicCard.scss';

class ComicCard extends React.Component {
  render() {
    const { issue } = this.props;
    return (
      <div className="marvelComics col-2 d-flex flex-column">
        <h5>{issue.title}</h5>
        <div className="image-wrapper">
          <img src={`${issue.thumbnail.path}.${issue.thumbnail.extension}`} alt={issue.name} title={issue.name} className="comicImage" />
        </div>
        <button className="btn btn-primary" onClick="this.props.addTolist">add to list</button>
      </div>
    );
  }
}
export default ComicCard;
