"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createResponse;

function createResponse(status, body) {
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    status,
    body
  };
}