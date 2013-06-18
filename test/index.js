
/**
 * Module dependencies.
 */

var router = require('hash-router')
  , chai = require('chai')
  
  // symbol imports
  
  , expect = chai.expect;

// tests

describe('router', function(){
  var called = false;
  before(function(){
    router.get('/test', function(){
      called = true;
    });
    router({ dispatch: false });
  });
  it('should react on hash change', function(){
    window.location.hash = '#/test';
    window.onhashchange();
    expect(called).to.equal(true);
  });
});
