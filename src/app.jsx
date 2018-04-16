import React from 'react';
// import classNames from 'classnames/bind';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import BootstrapView from './views/bootstrap';
import LoadingFontsView from './views/loading-fonts';
import LoadingImagesView from './views/loading-images';
import TreeShakingView from './views/tree-shaking';
// import styles from './app.scss';
import './styles/bootstrap-overrides.scss';

// const cx = classNames.bind(styles);

class App extends React.Component {
  state = {

  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => (<div>Welcome</div>)} />
          <Route path="/bootstrap-components" component={BootstrapView} />
          <Route path="/more/loading-fonts" component={LoadingFontsView} />
          <Route path="/more/loading-images" component={LoadingImagesView} />
          <Route path="/more/tree-shaking" component={TreeShakingView} />
        </Switch>
      </div>
    );
  }
}

export default App;
