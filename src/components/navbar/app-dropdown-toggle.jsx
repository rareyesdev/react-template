import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import { withRouter } from 'react-router-dom';

function AppDropdownToogle({ to, children, location }) {
  const active = location.pathname.startsWith(to);
  return (
    <DropdownToggle nav caret className={classNames({ active })}>
      {children}
    </DropdownToggle>
  );
}

AppDropdownToogle.propTypes = {
  to: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  children: PropTypes.node,
};

AppDropdownToogle.defaultProps = {
  children: undefined,
};

const AppDropdownToogleWithRouter = withRouter(AppDropdownToogle);

export default AppDropdownToogleWithRouter;
