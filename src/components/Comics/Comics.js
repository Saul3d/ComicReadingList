import React from 'react';
import ComicCard from '../ComicCard/ComicCard';
import './Comics.scss';

class Comics extends React.Component {
  render() {
    const { issues } = this.props;
    const makeComicCards = issues.map(issue => (
      <ComicCard issue={issue} />
    ));
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {makeComicCards}
      </div>
    );
  }
}

export default Comics;
