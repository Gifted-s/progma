"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _create_response = _interopRequireDefault(require("../modules/create_response/create_response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controllers {
  constructor(services) {
    this.services = services;
    this.deleteProjectNameController = this.deleteProjectNameController.bind(this);
    this.getProjectNamesController = this.getProjectNamesController.bind(this);
    this.oAuthController = this.oAuthController.bind(this);
    this.submitProjectController = this.submitProjectController.bind(this);
    this.updateProjectController = this.updateProjectController.bind(this);
    this.getProjectsController = this.getProjectsController.bind(this);
    this.updateProjectNameController = this.updateProjectNameController.bind(this);
    this.addProjectNameController = this.addProjectNameController.bind(this);
  }

  async oAuthController(http) {
    const {
      query
    } = http;

    try {
      let response = await this.services.oauthService(query.code);
      return (0, _create_response.default)(200, response);
    } catch (error) {
      return (0, _create_response.default)(400, response);
    }
  }

  async submitProjectController(http) {
    const {
      body
    } = http;

    try {
      let response = await this.services.submitProject(body);
      return (0, _create_response.default)(200, response);
    } catch (error) {
      return (0, _create_response.default)(400, response);
    }
  }

  async updateProjectController(http) {
    const {
      body
    } = http;
    const {
      id
    } = http.params;

    try {
      let response = await this.services.updateProject({
        id,
        updateBody: body
      });
      return (0, _create_response.default)(200, response);
    } catch (error) {
      return (0, _create_response.default)(400, response);
    }
  }

  async updateProjectNameController(http) {
    const {
      body
    } = http;
    const {
      id
    } = http.params;

    try {
      let response = await this.services.updateProjectName(id, body);
      return (0, _create_response.default)(200, response);
    } catch (error) {
      return (0, _create_response.default)(400, response);
    }
  }

  async addProjectNameController(http) {
    const {
      body
    } = http;

    try {
      let response = await this.services.addProjectName(body);
      return (0, _create_response.default)(200, response);
    } catch (error) {
      return (0, _create_response.default)(400, response);
    }
  }

  async getProjectsController(http) {
    const {
      body
    } = http;

    try {
      let response = await this.services.getProjects(body);
      return (0, _create_response.default)(200, response);
    } catch (error) {
      return (0, _create_response.default)(400, response);
    }
  }

  async getProjectNamesController(http) {
    try {
      let response = await this.services.getNames();
      return (0, _create_response.default)(200, response);
    } catch (error) {
      console.error(error);
      return (0, _create_response.default)(400, {
        error: 'error'
      });
    }
  }

  async deleteProjectNameController(http) {
    const {
      id
    } = http.params;

    try {
      let response = await this.services.deleteProjectName(id);
      return (0, _create_response.default)(200, response);
    } catch (error) {
      return (0, _create_response.default)(400, response);
    }
  }

}

exports.default = Controllers;