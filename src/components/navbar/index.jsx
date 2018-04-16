import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames/bind';
import Navbar from 'reactstrap/lib/Navbar';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import Collapse from 'reactstrap/lib/Collapse';
import UncontrolledDropdown from 'reactstrap/lib/UncontrolledDropdown';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import AppNavLink from './app-nav-link';
import AppDropdownToggle from './app-dropdown-toggle';
import AppDropdownItem from './app-navbar-dropdown-item';
// import styles from './navbar.scss';
import Brand from '../brand';

// const cx = classNames.bind(styles);

class AppNavbar extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const env = process.env.NODE_ENV;
    return (
      <Navbar dark color="primary" expand="md">
        <Brand />
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <AppNavLink exact to="/">Home</AppNavLink>
            </NavItem>
            <NavItem>
              <AppNavLink to="/bootstrap-components">Bootstrap Components</AppNavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <AppDropdownToggle to="/more">More</AppDropdownToggle>
              <DropdownMenu right>
                <AppDropdownItem to="/more/loading-fonts">Loading Additional Fonts</AppDropdownItem>
                <AppDropdownItem to="/more/loading-images">Loading Images</AppDropdownItem>
                <DropdownItem divider />
                <AppDropdownItem to="/more/tree-shaking">Tree Shaking</AppDropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="d-flex">
              <span className="badge badge-pill badge-dark mt-auto mb-auto">
                NODE_ENV
                <br />
                {env}
              </span>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default AppNavbar;
