import React from 'react';

import './Comics.scss';

class Comics extends React.Component {
  render() {
    const { issues } = this.props;
    const makeComicCards = issues.map(issue => (
      <div className="marvelComics col-2 d-flex flex-column">
        <h5>{issue.title}</h5>
        <div className="image-wrapper">
          <img src={`${issue.thumbnail.path}.${issue.thumbnail.extension}`} alt={issue.name} title={issue.name} className="comicImage" />
        </div>
      </div>
    ));
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {makeComicCards}
      </div>
    );
  }
}

export default Comics;
