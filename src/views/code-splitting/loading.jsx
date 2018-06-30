import React from 'react';
import PropTypes from 'prop-types';

function Loading(props) {
  const { error, timedOut, pastDelay } = props;
  if (error) {
    // When the loader has errored
    return <div>Failed to load, please refresh the page</div>;
  }
  if (timedOut) {
    // When the loader has taken longer than the timeout
    return <div>This is taking too long. Try refreshing the page</div>;
  }
  if (pastDelay) {
    // When the loader has taken longer than the delay
    return <div>Loading...</div>;
  }
  // When the loader has just started
  return null;
}

Loading.propTypes = {
  error: PropTypes.bool,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
};

Loading.defaultProps = {
  error: false,
  timedOut: false,
  pastDelay: false,
};

export default Loading;
