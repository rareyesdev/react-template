import React from 'react';
import classNames from 'classnames/bind';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import styles from './brand.scss';

const cx = classNames.bind(styles);

function Brand() {
  return (
    <NavbarBrand href="/">
      <div className={cx('flex-wrapper')}>
        <div className={cx('react-icon')} />
        <span>React Template</span>
      </div>
    </NavbarBrand>
  );
}

export default Brand;
