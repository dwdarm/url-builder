'use strict';

(function () {
  let root = this;
  let previousUrlBuilder = root.urlBuilder;
  
  const urlBuilder = (baseUrl = '', options = {}) => {
    let result = baseUrl;
    
    // path
    if (typeof options.path === 'string') {
      result = `${result}/${options.path}`;
    }
    
    // query
    if (typeof options.query === 'object' && options.query !== null) {
      const query = options.query; 
      Object.keys(query).forEach((key, i) => {
        result = `${result}${i === 0 ? '?' : '&'}`
        if (Array.isArray(query[key])) {
          result = `${result}${key}=${query[key].join(',')}`;
        } 
        else {
          result = `${result}${key}=${query[key]}`;
        }
      });
    }
    
    // hash
    if (typeof options.hash === 'string') {
      result = `${result}#${options.hash}`;
    }
    
    return result;
  }
  
  urlBuilder.noConflict = function() {
    root.urlBuilder = previousUrlBuilder;
    return urlBuilder;
  }
  
  if( typeof exports !== 'undefined' ) {
    if( typeof module !== 'undefined' && module.exports ) {
      exports = module.exports = urlBuilder;
    }
    exports.urlBuilder = urlBuilder;
  } 
  else {
    root.urlBuilder = urlBuilder;
  }
  
}).call(this);
