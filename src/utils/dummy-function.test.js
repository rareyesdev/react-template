/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

import { expect } from 'chai';
import foo from './dummy-function';

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
