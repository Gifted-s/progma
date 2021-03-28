"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _oauth = _interopRequireDefault(require("./oauth"));

var _project_submission = _interopRequireDefault(require("../entities/project_submission"));

var _project_name = _interopRequireDefault(require("../entities/project_name"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Services extends _oauth.default {
  constructor(ProjectManegementDB) {
    super();
    this.pmDB = ProjectManegementDB;
  }

  async submitProject(projectBody) {
    let project = new _project_submission.default(projectBody);
    const response = await this.pmDB.insertProject(project);
    return response;
  }

  async updateProject({
    id,
    updateBody
  }) {
    if (!id) {
      throw new Error('id is required');
    }

    const response = await this.pmDB.updateProject(id, updateBody);
    return response;
  }

  async getProjects() {
    const response = await this.pmDB.getProjects();
    return response;
  }

  async addProjectName(nameBody) {
    const projectName = new _project_name.default(nameBody);
    const response = await this.pmDB.insertProjectName({
      project_name: projectName.project_name
    });
    return response;
  }

  async updateProjectName(id, updateBody) {
    const projectName = new _project_name.default(updateBody);
    const response = await this.pmDB.updateProjectName(id, projectName);
    return response;
  }

  async deleteProjectName(id) {
    if (!id) throw new Error('id is required for deletion');
    const response = await this.pmDB.deleteProjectName(id);
    return response;
  }

  async getNames() {
    const response = await this.pmDB.getProjectNames();
    return response;
  }

}

exports.default = Services;