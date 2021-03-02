"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class AuthCallback {
  constructor(controller) {
    this.controller = controller;
    return this.handleAuthCallback();
  }

  handleAuthCallback() {
    return (req, res) => {
      const httpRequest = {
        body: req.body,
        query: req.query,
        params: req.params,
        ip: req.ip,
        method: req.method,
        path: req.path,
        query: req.query,
        headers: {
          'Content-Type': req.get('Content-Type'),
          Referer: req.get('referer'),
          'User-Agent': req.get('User-Agent')
        }
      };
      return this.controller(httpRequest).then(httpResponse => {
        return res.status(httpResponse.status).send(httpResponse.body);
      }).catch(e => res.status(500).send({
        error: 'An unkown error occurred.'
      }));
    };
  }

}

exports.default = AuthCallback;