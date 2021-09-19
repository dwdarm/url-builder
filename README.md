[![Build Status](https://app.travis-ci.com/dwdarm/url-builder.svg?branch=master)](https://app.travis-ci.com/dwdarm/url-builder)
<br />
# url-builder
A library for creating URL string with path, URI fragment, and query parameters for NodeJS and browser.

## installation
```
npm install @dwdarm/url-builder
```

## usage
```javascript
const urlBuilder = require('@dwdarm/url-builder') 

// BASIC USAGE

urlBuilder(baseUrl, options = {})

// example:

urlBuilder('http://example.com', {
  path: 'path',
  hash: 'hash',
  query: {
    foo: 'bar',
    array: ['one', 'two', 'three']
  }
})

// output: http://example.com/path?foo=bar&array=one,two,three#hash

```
