import React from 'react';
import {
  Popover,
  PopoverHeader,
  PopoverBody,
} from 'reactstrap';

import './ListItem.scss';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

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
    const { issue } = this.props;
    return (
      <div className="marvelComicsBooks d-flex flex-column">
       {/* <h6>{issue.comicTitle}</h6> */}
       <div className="image-wrapper" id={`Popover-${issue.id}`}>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target={`Popover-${issue.id}`} toggle={this.toggle}>
          <PopoverHeader>{issue.comicTitle}</PopoverHeader>
          <PopoverBody>{issue.description}</PopoverBody>
        </Popover>
        <img src={issue.image} alt={issue.comicTitle} title={issue.comicTitle} className="comicImage"/>
       </div>
       <div className="button-wrapper">
        <button className="deleteComic btn btn-danger" onClick={this.removeComic}>Remove</button>
        { issue.isRead !== true
          ? <React.Fragment>
              <button className="read btn btn-primary" onClick={this.updateComic}>Read</button>
          </React.Fragment>
          : null
        }
       </div>
     </div>
    );
  }
}

export default ListItem;
