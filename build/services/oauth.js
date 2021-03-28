"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _create_auth_page = _interopRequireDefault(require("../modules/create_auth_page/create_auth_page"));

var _config = _interopRequireDefault(require("../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthService {
  async oauthService(authorization_code) {
    if (authorization_code) {
      try {
        const resp = await (0, _axios.default)({
          method: 'Post',
          url: 'https://auth.calendly.com/oauth/token',
          data: (0, _config.default)(authorization_code)
        });
        const organization = resp.data.organization.slice(resp.data.organization.lastIndexOf('/') + 1, resp.data.organization.length);
        const user = await _axios.default.get('https://api.calendly.com//users/me', {
          headers: {
            Authorization: 'Bearer ' + resp.data.access_token
          }
        });
        const {
          name,
          email,
          timezone,
          avatar_url
        } = user.data.resource;
        return (0, _create_auth_page.default)(avatar_url, name, email, timezone, organization, resp.data.access_token);
      } catch (error) {
        return error;
      }
    }
  }

}

exports.default = AuthService;