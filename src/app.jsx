import React from 'react';
import classNames from 'classnames/bind';
import { usedFunction } from './utils/unused-function';
import styles from './app.css';

const cx = classNames.bind(styles);

class App extends React.Component {
  state = {
    name: '',
  }

  onChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div className={cx('component')}>
        {"What's your name: "} <input type="text" onChange={this.onChange} value={name} />
        <div className={cx('name-section')}>
          <i className={cx('bookmark-icon')} />
          {name && '-> Hello '}
          {name && <span className={cx('person-name')}>{name}</span>}
        </div>
        <div className={cx('with-nice-font')}>
          This is some text with a nice custom font
        </div>
        <div>
          { usedFunction() }
        </div>
      </div>
    );
  }
}

export default App;
