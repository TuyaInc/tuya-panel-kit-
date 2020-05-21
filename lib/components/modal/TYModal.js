Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/modal/TYModal.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _native = require('styled-components/native');

var _native2 = _interopRequireDefault(_native);

var _reactNative = require('react-native');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var get = _utils.CoreUtils.get;


var ALIGN = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end'
};

var isIphoneX = _utils.RatioUtils.isIphoneX;


var ios = _reactNative.Platform.OS === 'ios';

var StyledMask = (0, _native2.default)(_reactNative.TouchableOpacity)(_templateObject, function (props) {
  return get(props, 'theme.global.mask', 'rgba(0, 0, 0, 0.7)');
});

var TYModal = function (_React$Component) {
  _inherits(TYModal, _React$Component);

  function TYModal(props) {
    _classCallCheck(this, TYModal);

    var _this = _possibleConstructorReturn(this, (TYModal.__proto__ || Object.getPrototypeOf(TYModal)).call(this, props));

    _initialiseProps.call(_this);

    _this._childRef = {};
    _this.state = {
      fade: new _reactNative.Animated.Value(0)
    };
    return _this;
  }

  _createClass(TYModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactNative.Animated.timing(this.state.fade, {
        duration: 200,
        toValue: 1
      }).start();
    }
  }, {
    key: 'render',
    value: function render() {
      var mask = this.props.mask;

      if (!mask) {
        return this.renderNoMaskModal();
      }
      return this.renderMaskModal();
    }
  }]);

  return TYModal;
}(_react2.default.Component);

TYModal.propTypes = {
  animationType: _propTypes2.default.oneOf(['fade', 'none']),

  alignContainer: _propTypes2.default.oneOf(['top', 'center', 'bottom']),

  onMaskPress: _propTypes2.default.func,

  modalChildStyle: _reactNative.ViewPropTypes.style,

  maskStyle: _reactNative.ViewPropTypes.style,

  mask: _propTypes2.default.bool,

  onlyLastModalVisible: _propTypes2.default.bool,

  useKeyboardView: _propTypes2.default.bool
};
TYModal.defaultProps = {
  animationType: 'fade',
  alignContainer: 'bottom',
  onMaskPress: function onMaskPress() {},
  maskStyle: null,
  mask: true,
  modalChildStyle: null,
  onlyLastModalVisible: true,
  useKeyboardView: false
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._handleMaskPress = function () {
    var _props = _this2.props,
        onMaskPress = _props.onMaskPress,
        children = _props.children;

    var childMotionType = get(_this2, '_childRef.' + (children.length - 1) + '.props.motionType', 'none');
    var childMaskPress = get(_this2, '_childRef.' + (children.length - 1) + '._handleMaskPress');
    if (childMotionType !== 'none' && typeof childMaskPress === 'function') {
      childMaskPress();
    } else {
      typeof onMaskPress === 'function' && onMaskPress();
    }
  };

  this.renderNoMaskModal = function () {
    var _props2 = _this2.props,
        onlyLastModalVisible = _props2.onlyLastModalVisible,
        activeIdx = _props2.activeIdx,
        children = _props2.children,
        animationType = _props2.animationType,
        alignContainer = _props2.alignContainer;

    var maskContainer = [styles.maskContainer, alignContainer && { justifyContent: ALIGN[alignContainer] }, { opacity: animationType === 'fade' ? _this2.state.fade : 1 }];
    return children.map(function (child, idx) {
      var childStyle = [maskContainer, onlyLastModalVisible && { display: idx === activeIdx ? 'flex' : 'none' }];
      return _react2.default.createElement(
        _reactNative.Animated.View,
        { key: idx, style: childStyle, pointerEvents: 'box-none', __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        },
        child
      );
    });
  };

  this.renderMaskModal = function () {
    var _props3 = _this2.props,
        onlyLastModalVisible = _props3.onlyLastModalVisible,
        activeIdx = _props3.activeIdx,
        children = _props3.children,
        animationType = _props3.animationType,
        onMaskPress = _props3.onMaskPress,
        alignContainer = _props3.alignContainer,
        maskStyle = _props3.maskStyle,
        modalChildStyle = _props3.modalChildStyle,
        useKeyboardView = _props3.useKeyboardView,
        props = _objectWithoutProperties(_props3, ['onlyLastModalVisible', 'activeIdx', 'children', 'animationType', 'onMaskPress', 'alignContainer', 'maskStyle', 'modalChildStyle', 'useKeyboardView']);

    var maskContainer = [styles.maskContainer, alignContainer && { justifyContent: ALIGN[alignContainer] }, maskStyle];
    return _react2.default.createElement(
      _reactNative.Modal,
      _extends({
        animationType: animationType,
        onRequestClose: _this2._handleMaskPress
      }, props, {
        visible: true,
        transparent: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }),
      children.map(function (child, idx) {
        var childStyle = [maskContainer, onlyLastModalVisible && { display: idx === activeIdx ? 'flex' : 'none' }];
        var modalChild = child;
        if (!Array.isArray(child)) {
          modalChild = _react2.default.cloneElement(child, {
            onMaskPress: get(child, 'props.onMaskPress', onMaskPress),
            ref: function ref(_ref) {
              _this2._childRef[idx] = _ref;
            }
          });
        }
        return _react2.default.createElement(
          StyledMask,
          {
            key: idx,
            style: childStyle,
            onPress: _this2._handleMaskPress,
            activeOpacity: 1,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            }
          },
          ios && useKeyboardView ? _react2.default.createElement(
            _reactNative.KeyboardAvoidingView,
            {
              behavior: 'padding',
              style: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: isIphoneX ? 20 : 0
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 174
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { onStartShouldSetResponder: function onStartShouldSetResponder() {
                  return true;
                }, style: modalChildStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 183
                }
              },
              modalChild
            )
          ) : _react2.default.createElement(
            _reactNative.View,
            { onStartShouldSetResponder: function onStartShouldSetResponder() {
                return true;
              }, style: modalChildStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 188
              }
            },
            modalChild
          )
        );
      })
    );
  };
};

var styles = _reactNative.StyleSheet.create({
  maskContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

exports.default = TYModal;