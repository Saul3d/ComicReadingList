import React from 'react';
import ListItem from '../../ListItem/ListItem';

import './ReadList.scss';

class ReadList extends React.Component {
  render() {
    const { issues, deleteListItem, updateList } = this.props;

    const makeComicReadList = issues.map(comicIssue => (
         <ListItem
            key={comicIssue.id}
            issue={comicIssue}
            deleteListItem={deleteListItem}
            updateList={updateList}
          />
    ));
    return (
      <div className="d-flex flex-wrap justify-content-center readSection-wrapper">
        {makeComicReadList}
      </div>
    );
  }
}

export default ReadList;
