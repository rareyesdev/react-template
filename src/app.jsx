import React from 'react';
// import classNames from 'classnames/bind';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import BootstrapView from './views/bootstrap';
import LoadingFontsView from './views/loading-fonts';
import LoadingImagesView from './views/loading-images';
import TreeShakingView from './views/tree-shaking';
import CodeSplittingViewLoadable from './views/code-splitting/code-splitting-view-loadable';
import CodeSplittingWithPreloadView from './views/code-splitting-with-preload';
// import styles from './app.scss';

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
          <Route path="/more/code-splitting" component={CodeSplittingViewLoadable} />
          <Route path="/more/code-splitting-preload" component={CodeSplittingWithPreloadView} />
        </Switch>
      </div>
    );
  }
}

export default App;
