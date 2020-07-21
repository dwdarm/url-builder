const assert = require('assert');
const urlBuilder = require('./url-builder.js');

describe('url-builder.js test', () => {
  it('It should return string of \'\'', () => {
    assert.strictEqual(urlBuilder(''), '');
  });
      
  it('It should return string of https://asd.com', () => {
    assert.strictEqual(urlBuilder('https://asd.com'), 'https://asd.com');
  });
      
  it('It should return string of https://asd.com/path', () => {
    assert.strictEqual(
      urlBuilder('https://asd.com', { path: 'path' }), 
      'https://asd.com/path'
    );
  });
      
  it('It should return string of https://asd.com/path#hash', () => {
    assert.strictEqual(
      urlBuilder('https://asd.com', { path: 'path', hash: 'hash' }), 
      'https://asd.com/path#hash'
    );
  });
      
  it('It should return string of https://asd.com?foo=bar', () => {
    assert.strictEqual(
      urlBuilder('https://asd.com', { 
        query: { foo: 'bar' }
      }), 
      'https://asd.com?foo=bar'
    );
  });
      
  it('It should return string of https://asd.com?foo=bar&bar=foo', () => {
    assert.strictEqual(
      urlBuilder('https://asd.com', { 
        query: { foo: 'bar', bar: 'foo' }
      }), 
      'https://asd.com?foo=bar&bar=foo'
    );
  });
      
  it('It should return string of https://asd.com?foo=one,two,three', () => {
    assert.strictEqual(
      urlBuilder('https://asd.com', { 
        query: { foo: ['one','two','three'] }
      }), 
      'https://asd.com?foo=one,two,three'
    );
  });
      
  it('It should return string of https://asd.com?foo=bar&bar=foo&foos=one,two,three', () => {
    assert.strictEqual(
      urlBuilder('https://asd.com', { 
        query: { foo: 'bar', bar: 'foo', foos: ['one','two','three'] }
      }), 
      'https://asd.com?foo=bar&bar=foo&foos=one,two,three'
    );
  });
      
  it('It should return string of https://asd.com/path?foo=bar&bar=foo&foos=one,two,three', () => {
    assert.strictEqual(
      urlBuilder('https://asd.com', { 
        path: 'path',
        query: { foo: 'bar', bar: 'foo', foos: ['one','two','three'] }
      }), 
      'https://asd.com/path?foo=bar&bar=foo&foos=one,two,three'
    );
  });
      
  it('It should return string of https://asd.com?foo=bar&bar=foo&foos=one,two,three#hash', () => {
    assert.strictEqual(
      urlBuilder('https://asd.com', { 
        hash: 'hash',
        query: { foo: 'bar', bar: 'foo', foos: ['one','two','three'] }
      }), 
      'https://asd.com?foo=bar&bar=foo&foos=one,two,three#hash'
    );
  });
      
  it('It should return string of https://asd.com/path?foo=bar&bar=foo&foos=one,two,three#hash', () => {
    assert.strictEqual(
      urlBuilder('https://asd.com', { 
        path: 'path',
        hash: 'hash',
        query: { foo: 'bar', bar: 'foo', foos: ['one','two','three'] }
      }), 
      'https://asd.com/path?foo=bar&bar=foo&foos=one,two,three#hash'
    );
  });
  
  it('It should return string of https://asd.com?foo=bar', () => {
    assert.strictEqual(
      urlBuilder('https://asd.com', { 
        query: { foo: 'bar', bar: undefined, baz: null }
      }), 
      'https://asd.com?foo=bar'
    );
  });
  
});
