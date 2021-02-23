
import  axios from 'axios'
import  createAuthPage from '../modules/create_auth_page/create_auth_page'
export default class AuthService {
    async oauthService(authorization_code) {
        if (authorization_code) {
            try {
                const resp = await axios({
                    method: 'Post', url: 'https://auth.calendly.com/oauth/token', data: createTokenRequestBody(authorization_code)
                })

                const organization = resp.data.organization.slice(resp.data.organization.lastIndexOf('/') + 1, resp.data.organization.length)
                const user = await axios.get('https://api.calendly.com//users/me', {
                    headers: { Authorization: 'Bearer ' + resp.data.access_token }
                })

                const { name, email, timezone, avatar_url } = user.data.resource
                return createAuthPage(avatar_url, name, email, timezone, organization, resp.data.access_token)


            } catch (error) {
                return error
            }

        }


    }

}

