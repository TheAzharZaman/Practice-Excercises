'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _todowork = require('./components/todowork');

var _todowork2 = _interopRequireDefault(_todowork);

var _data = require('./database/data');

var _data2 = _interopRequireDefault(_data);

require('./main.css');

var _serviceWorker = require('./serviceWorker');

var serviceWorker = _interopRequireWildcard(_serviceWorker);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toDoItems = _data2.default.map(function (key) {});
console.log(toDoItems);

var RootComponent = function RootComponent() {
  return _react2.default.createElement('div', { className: 'Root-container' });
};

var RootDirectory = document.getElementById('Root');

_reactDom2.default.render({ toDoItems: toDoItems }, RootDirectory);

serviceWorker.register();
