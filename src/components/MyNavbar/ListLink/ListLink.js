import React from 'react';

import './ListLink.scss';

class ListLink extends React.Component {
  render() {
    const { saySomething } = this.props;
    return (
      <span onClick={saySomething}>
        {this.props.children}
      </span>
    );
  }
}

export default ListLink;
