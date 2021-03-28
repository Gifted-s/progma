"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _services = _interopRequireDefault(require("../services"));

var _controllers = _interopRequireDefault(require("./controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const controllerInstance = new _controllers.default(_services.default);
var _default = controllerInstance;
exports.default = _default;