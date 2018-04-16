import React from 'react';
import { usedFunction } from '../utils/unused-function';

const View = () => {
  return (
    <div>
      <div>{ usedFunction() }</div>
      <div>{'unusedFunction should be removed from JS bundle cause it\'s not used in code'}</div>
    </div>
  );
};

export default View;
