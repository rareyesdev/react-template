import React from 'react';
import classNames from 'classnames/bind';
import styles from './autoprefixer.scss';

const cx = classNames.bind(styles);

function View() {
  return (
    <div className={cx('component')}>
      This text has:
      <pre>user-select: none</pre>
      Autoprefixer should add vendor prefixes:
      <ul>
        <li>-webkit-user-select: none;</li>
        <li>-moz-user-select: none;</li>
        <li>-ms-user-select: none;</li>
        <li>user-select: none;</li>
      </ul>
    </div>
  );
}

export default View;
