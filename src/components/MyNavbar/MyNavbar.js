import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import firebase from 'firebase/app';
import 'firebase/auth';

// import getComicsData from '../../helpers/data/getListItemData';
import getListData from '../../helpers/data/getListData';
import ListLink from './ListLink/ListLink';


import './MyNavbar.scss';

class MyNavbar extends React.Component {
  state= {
    isOpen: false,
    lists: [],
  }

  // getMyComicLists = () => {
  //   getListData.getLists()
  //     .then((lists) => {
  //       console.error('hi', lists);
  //       this.setState({ lists });
  //     })
  //     .catch(err => console.error('Could not get your comic list', err));
  // }

  componentDidMount() {
    // this.getMyComicLists();
  }

  // saySomething = (listId) => {
  //   console.error(`hello ${listId}`);
  // }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    const { authed } = this.props;
    // eslint-disable-next-line max-len
    // const allList = this.state.lists.map(list => <DropdownItem key={list.id} >
    //   <NavItem tag={RRNavLink} to={list.name} >
    //     <ListLink saySomething={this.saySomething.bind(this, list.id)}>{list.name}</ListLink>
    //   </NavItem>
    // </DropdownItem>);


    const buildNavbar = () => {
      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to='/characters'>Characters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/comics'>Comics</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/MyLists'>MyLists</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret tag={RRNavLink} to='/home'>
                  Home
                </DropdownToggle>
                <DropdownMenu right>
                  {allList}
                </DropdownMenu>
              </UncontrolledDropdown> */}
            <NavItem>
              <NavLink onClick={this.logMeOut}>Logout</NavLink>
            </NavItem>
          </Nav>
        );
      }
      return <Nav className="ml-auto" navbar />;
    };
    return (
      <div className="MyNavbar">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Excelsior Reading App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          {buildNavbar()}
        </Collapse>
      </Navbar>
    </div>
    );
  }
}
export default MyNavbar;
