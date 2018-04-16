import React from 'react';
import classNames from 'classnames/bind';
import styles from './loading-fonts.scss';

const cx = classNames.bind(styles);

const View = () => (
  <div className={cx('component')}>
    This text uses a custom font. Custom Fonts might be needed for branding purposes but we should
    stick with the default app font for everything else.
  </div>
);

export default View;
