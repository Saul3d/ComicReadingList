import React from 'react';

class ListItem extends React.Component {
  render() {
    const { issues } = this.props;
    console.error(issues);
    const makeComicIssueListCard = issues.map(comicIssue => (
      <div className="marvelComics col-2 d-flex flex-column">
       <h6>{comicIssue.comicTitle}</h6>
       <div className="image-wrapper">
       <img src={comicIssue.image} alt={comicIssue.comicTitle} title={comicIssue.comicTitle} className="comicImage"/>
       </div>
       <div className="button-wrapper">
        <button className="deleteComic btn btn-danger">Remove</button>
        <button className="read btn btn-primary">Read</button>
       </div>
     </div>
    ));
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {makeComicIssueListCard}
      </div>
    );
  }
}

export default ListItem;
