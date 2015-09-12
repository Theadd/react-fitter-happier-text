'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var svgStyles = {
  width: '100%',
  maxHeight: '100%',
  fill: 'currentColor',
  overflow: 'visible',
  boxSizing: 'border-box'
};
var textStyles = {
  fontFamily: 'inherit',
  fontSize: '1rem',
  fontWeight: 'inherit',
  textAnchor: 'middle',
  boxSizing: 'border-box'
};

var FitterHappierText = (function (_Component) {
  _inherits(FitterHappierText, _Component);

  function FitterHappierText(props) {
    _classCallCheck(this, FitterHappierText);

    _get(Object.getPrototypeOf(FitterHappierText.prototype), 'constructor', this).call(this, props);
    this.resize = (0, _lodash.debounce)(this.resize.bind(this));
    this.state = {
      width: 256,
      height: 24
    };
  }

  _createClass(FitterHappierText, [{
    key: 'resize',
    value: function resize() {
      var _ref = (function (_ref3) {
        var width = _ref3.width;
        var height = _ref3.height;
        return [Math.round(width), Math.round(height)];
      })(_react2['default'].findDOMNode(this.refs.text).getBBox());

      var _ref2 = _slicedToArray(_ref, 2);

      var width = _ref2[0];
      var height = _ref2[1];

      !(this.state.width === width && this.state.height === height) && this.setState({ width: width, height: height });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resize();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.resize();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var text = _props.text;
      var _props$baseline = _props.baseline;
      var baseline = _props$baseline === undefined ? 16 : _props$baseline;
      var _props$paddingY = _props.paddingY;
      var paddingY = _props$paddingY === undefined ? 0 : _props$paddingY;
      var _props$style = _props.style;
      var style = _props$style === undefined ? {} : _props$style;

      var props = _objectWithoutProperties(_props, ['text', 'baseline', 'paddingY', 'style']);

      var _state = this.state;
      var width = _state.width;
      var height = _state.height;

      return _react2['default'].createElement(
        'svg',
        _extends({ viewBox: '0 0 ' + width + ' ' + (height + paddingY), style: _extends({}, svgStyles, style) }, props),
        _react2['default'].createElement(
          'text',
          { ref: 'text', x: '50%', y: baseline, style: textStyles },
          text
        )
      );
    }
  }]);

  return FitterHappierText;
})(_react.Component);

FitterHappierText.propTypes = {
  text: _react2['default'].PropTypes.string,
  baseline: _react2['default'].PropTypes.number,
  paddingY: _react2['default'].PropTypes.number
};

exports['default'] = FitterHappierText;
module.exports = exports['default'];