'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./main.css');

require('./bg.css');

var _serviceWorker = require('./serviceWorker');

var serviceWorker = _interopRequireWildcard(_serviceWorker);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RootComponent = function RootComponent() {
  return _react2.default.createElement(
    'div',
    { className: 'Root-container' },
    _react2.default.createElement(
      'h1',
      { className: 'Heading' },
      'Lets Do It'
    ),
    _react2.default.createElement(
      'p',
      { className: 'Para' },
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad illum, veniam molestias praesentium minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad illum, veniam molestias praesentium minus.'
    ),
    _react2.default.createElement(
      'button',
      { className: 'Btn', href: 'https://googel.com' },
      'Contact'
    )
  );
};

var RootDirectory = document.getElementById('Root');

_reactDom2.default.render(_react2.default.createElement(RootComponent, null), RootDirectory);

serviceWorker.register();
