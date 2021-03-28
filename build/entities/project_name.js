"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ProjectName {
  constructor({
    project_name
  }) {
    if (!project_name) {
      throw new Error('name is required');
    }

    this.project_name = project_name;
  }

}

exports.default = ProjectName;