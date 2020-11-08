"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

require("./main.css");

require("./bg.css");

require("./fonts.css");

var _serviceWorker = require("./serviceWorker");

var serviceWorker = _interopRequireWildcard(_serviceWorker);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// babel src/App.js --out-file=src/index.js --presets=react,env --watch

var RootComponent = function RootComponent() {
  return _react2.default.createElement(
    "div",
    { className: "Root-container" },
    _react2.default.createElement(
      "h1",
      { className: "Heading" },
      "WELCOME TO"
    ),
    _react2.default.createElement(
      "p",
      { className: "Para" },
      "The most practical, friendly and Co-operative team on Upwork capable of providing optimal productivity. ",
      _react2.default.createElement("br", null),
      "We commit if we can Hit"
    ),
    _react2.default.createElement(
      "h1",
      { className: "Heading2" },
      "WE BELIEVE & YOU WILL"
    )
  );
};

var RootDirectory = document.getElementById("Root");

_reactDom2.default.render(_react2.default.createElement(RootComponent, null), RootDirectory);

serviceWorker.register();
