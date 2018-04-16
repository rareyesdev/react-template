import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function AppNavLink({ to, exact, children }) {
  return (
    <NavLink
      className="nav-link"
      activeClassName="active"
      to={to}
      exact={exact}
    >
      {children}
    </NavLink>
  );
}

AppNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.node,
};

AppNavLink.defaultProps = {
  exact: false,
  children: undefined,
};

export default AppNavLink;
