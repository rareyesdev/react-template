/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-console */

import { expect } from 'chai';
import foo from './dummy-function';

console.log('NODE_ENV: ', process.env.NODE_ENV);

describe('dummy-function', function () {
  context('when passing a truthy value', function () {
    it('should return correct string', function () {
      const result = foo(true);
      expect(result).to.equal('Argument is true');
    });
  });

  context('when passing a falsy value', function () {
    it('should return correct string', function () {
      const result = foo(false);
      expect(result).to.equal('Argument is false');
    });
  });
});
