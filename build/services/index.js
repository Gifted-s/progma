"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataAccess = _interopRequireDefault(require("../data-access"));

var _project_services = _interopRequireDefault(require("./project_services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ProjectManagementService = new _project_services.default(_dataAccess.default);
var _default = ProjectManagementService;
exports.default = _default;