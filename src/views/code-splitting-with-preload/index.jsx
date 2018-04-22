import React from 'react';
import ReactLoadable from 'react-loadable';
import Button from 'reactstrap/lib/Button';
import { Link } from 'react-router-dom';
import CodeSplittingViewLoadable from '../code-splitting/code-splitting-view-loadable';

function preloadView() {
  CodeSplittingViewLoadable.preload();
}

function preloadAll() {
  ReactLoadable.preloadAll();
}

function View() {
  return (
    <div>
      <div>
        Hovering on the link will preload Code Splitting View.
        <Link
          to="/more/code-splitting"
          onMouseOver={preloadView}
          onFocus={preloadView}
        >
          Code Splitting View
        </Link>
      </div>
      <br />
      <div>
        Clicking the button will preload all components in the app
        <Button color="primary" size="sm" onClick={preloadAll}>Preload All</Button>
      </div>
    </div>
  );
}

export default View;
