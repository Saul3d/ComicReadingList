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

class MyNavbar extends React.Component {
  state= {
    isOpen: false,
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    const { authed } = this.props;
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
              <NavLink tag={RRNavLink} to='/home'>MyList</NavLink>
            </NavItem>
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
        <NavbarBrand href="/">Excelsior Reading</NavbarBrand>
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
