import React from 'react';
import classNames from 'classnames/bind';
import styles from './code-splitting.scss';

const cx = classNames.bind(styles);

function View() {
  return (
    <div className={cx('component')}>
      This view was asynchronously loaded using Webpack code splitting feature
    </div>
  );
}

export default View;
