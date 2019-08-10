import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import getListData from '../../helpers/data/getListData';

import './ComicCard.scss';

const defaultComicCard = {
  comicApiId: '',
  comicTitle: '',
  currentIssue: '',
  image: '',
  isRead: false,
  listId: '',
  description: '',
};

class ComicCard extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      issue: defaultComicCard,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  saveNewComicToFirebase = (listId, issue) => {
    const issueCopy = {
      comicApiId: issue.id,
      comicTitle: issue.title,
      currentIssue: 'false',
      image: `${issue.thumbnail.path}.${issue.thumbnail.extension}`,
      isRead: false,
      listId,
      description: `${issue.description}`,
    };
    this.setState({ issue: issueCopy });
    getListData.addComicToList(issueCopy);
    getListData.getLists();
  }

  render() {
    const { issue, list } = this.props;
    const myLists = list.map(l => (
    // eslint-disable-next-line max-len
    <DropdownItem key={l.id} onClick={this.saveNewComicToFirebase.bind(this, l.id, issue)}>{l.name}</DropdownItem>
    ));
    return (
      <div className="marvelComics col-2 d-flex flex-column">
        <h5>{issue.title}</h5>
        <div className="image-wrapper">
          <img src={`${issue.thumbnail.path}.${issue.thumbnail.extension}`} alt={issue.name} title={issue.name} className="comicImage" />
        </div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="listSelectDropdown">
          <DropdownToggle caret>
            Add To
          </DropdownToggle>
          <DropdownMenu>
            {myLists}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
export default ComicCard;
