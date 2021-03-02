"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./route_paths/routes"));

var _expressCallback = _interopRequireDefault(require("./modules/express-callback"));

var _controller = _interopRequireDefault(require("./controller"));

var _auth_callback = _interopRequireDefault(require("./modules/auth-callback/auth_callback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

let app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.get('/', new _auth_callback.default(_controller.default.oAuthController));
app.post(_routes.default.ADD_PROJECT_PATH, new _expressCallback.default(_controller.default.submitProjectController));
app.post(_routes.default.UPDATE_PROJECT_PATH, new _expressCallback.default(_controller.default.updateProjectController));
app.get(_routes.default.GET_PROJECTS_PATH, new _expressCallback.default(_controller.default.getProjectsController));
app.post(_routes.default.INSERT_PROJECT_NAME_PATH, new _expressCallback.default(_controller.default.addProjectNameController));
app.post(_routes.default.UPDATE_PROJECT_NAME_PATH, new _expressCallback.default(_controller.default.updateProjectNameController));
app.post(_routes.default.DELETE_PROJECT_NAME_PATH, new _expressCallback.default(_controller.default.deleteProjectNameController));
app.get(_routes.default.GET_PROJECT_NAMES_PATH, new _expressCallback.default(_controller.default.getProjectNamesController));
const PORT = process && process.env && process.env.PORT || undefined || 4000;
app.listen(PORT, () => console.log('Listening on port 4000'));