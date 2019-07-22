import React from 'react';
import ListItem from '../ListItem/ListItem';

class List extends React.Component {
  render() {
    const { issues } = this.props;
    // console.error('Greg', issues);
    return (
      <React.Fragment>
        <ListItem issues={issues} />
      </React.Fragment>
    );
  }
}

export default List;
