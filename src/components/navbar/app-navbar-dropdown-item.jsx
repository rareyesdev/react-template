import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import { NavLink } from 'react-router-dom';
import styles from './app-dropdown-item.scss';

const cx = classNames.bind(styles);

function AppDropdownItem({ to, children }) {
  return (
    <DropdownItem className={cx('component')}>
      <NavLink to={to} className="nav-link" activeClassName="active">
        {children}
      </NavLink>
    </DropdownItem>
  );
}

AppDropdownItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

AppDropdownItem.defaultProps = {
  children: undefined,
};

export default AppDropdownItem;
