'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var root = this;
  var previousUrlBuilder = root.urlBuilder;

  var urlBuilder = function urlBuilder() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var result = baseUrl; // path

    if (typeof options.path === 'string') {
      result = "".concat(result, "/").concat(options.path);
    } // query


    if (_typeof(options.query) === 'object' && options.query !== null) {
      var query = options.query;
      Object.keys(query).forEach(function (key, i) {
        result = "".concat(result).concat(i === 0 ? '?' : '&');

        if (Array.isArray(query[key])) {
          result = "".concat(result).concat(key, "=").concat(query[key].join(','));
        } else {
          result = "".concat(result).concat(key, "=").concat(query[key]);
        }
      });
    } // hash


    if (typeof options.hash === 'string') {
      result = "".concat(result, "#").concat(options.hash);
    }

    return result;
  };

  urlBuilder.noConflict = function () {
    root.urlBuilder = previousUrlBuilder;
    return urlBuilder;
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = urlBuilder;
    }

    exports.urlBuilder = urlBuilder;
  } else {
    root.urlBuilder = urlBuilder;
  }
}).call(this);