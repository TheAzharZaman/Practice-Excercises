'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _comments = require('./data/comments');

var _comments2 = _interopRequireDefault(_comments);

require('./main.css');

var _newComment = require('./data/newComment');

var _newComment2 = _interopRequireDefault(_newComment);

var _serviceWorker = require('./serviceWorker');

var serviceWorker = _interopRequireWildcard(_serviceWorker);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WhatToAdd = [];

var RootComponent = function RootComponent() {
  return _react2.default.createElement(
    'div',
    { className: 'Parent' },
    _react2.default.createElement(
      'div',
      { className: 'Main-container' },
      _react2.default.createElement(Header, null),
      _react2.default.createElement(TweetComments, { commentprop: WhatToAdd })
    ),
    _react2.default.createElement('div', { id: 'comment-render' })
  );
};

var Header = function Header() {
  return _react2.default.createElement(
    'div',
    { className: 'header' },
    _react2.default.createElement(
      'h1',
      { className: 'name' },
      'Azhar Zaman'
    ),
    _react2.default.createElement(
      'h1',
      { className: 'user' },
      '@azhar'
    )
  );
};

var TweetComments = function TweetComments(_ref) {
  var commentprop = _ref.commentprop;


  if (commentprop.length === 0) {
    return _react2.default.createElement(
      'div',
      { className: 'Tweet-count' },
      'Sorry No Comments ...',
      _react2.default.createElement(
        'button',
        { id: 'initiater' },
        ' Initiate Discussion '
      ),
      _react2.default.createElement(
        'button',
        null,
        'Go Back'
      )
    );
  } else {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'Tweet-count' },
        'There are ',
        commentprop.length,
        ' comments',
        _react2.default.createElement(
          'button',
          null,
          ' Show / Hide'
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'Tweets-section' },
          commentprop.map(function (comment) {
            return _react2.default.createElement(
              'li',
              { key: comment.user, className: 'Tweet-Comment' },
              _react2.default.createElement(
                'span',
                { className: 'Tweet-name' },
                ' ',
                comment.name,
                ' '
              ),
              _react2.default.createElement(
                'span',
                { className: 'Tweet-user' },
                ' ',
                comment.user,
                ' '
              ),
              _react2.default.createElement(
                'p',
                { className: 'Tweet-text' },
                ' ',
                comment.text,
                ' '
              )
            );
          })
        )
      )
    );
  }
};

var RootDirectory = document.getElementById('Root');

_reactDom2.default.render(_react2.default.createElement(RootComponent, null), RootDirectory);

var NewSpace = document.getElementById('comment-render');
var CommentInput = void 0;
var Initiater = document.getElementById('initiater');
var ValueOfComment = void 0;
var SubmitBtn = void 0;
var NewComments = [];

Initiater.addEventListener('click', function () {
  _reactDom2.default.render(_react2.default.createElement(_newComment2.default, null), NewSpace);
  CommentInput = document.getElementById('input-space');
  SubmitBtn = document.getElementById('submit');
  console.log(CommentInput);

  functions();
});

function functions() {
  CommentInput.addEventListener('change', function () {
    ValueOfComment = CommentInput.value;
    console.log(ValueOfComment);
  });
}

// Rendering ////////

serviceWorker.register();
